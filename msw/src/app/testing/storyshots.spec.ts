import * as React from "react";
import initStoryshots, {
  Stories2SnapsConverter,
} from "@storybook/addon-storyshots";
import { render } from "@testing-library/react";
import { act, create } from "react-test-renderer";
import { server } from "../../mocks/server";

const converter = new Stories2SnapsConverter({
  snapshotsDirName: "./__snapshots__",
  snapshotExtension: ".snap.js",
});

initStoryshots({
  framework: "react",
  stories2snapsConverter: converter,

  /**
   * NOTE: https://github.com/storybookjs/storybook/issues/7745#issuecomment-801940326
   * NOTE: jest@27とts-jest@27で各ディレクトリにsnapshotファイルを置こうと、jest configに
   * ```
   * transform: {
   *   '^.+\\.stories\\.tsx$': '@storybook/addon-storyshots/injectFileName'
   * }
   * ```
   * を設置すると、`storyshots found 0 stories`になる
   * そのためjest@26とts-jest@26を使っている
   */
  test: async ({ story, done, context }) => {
    server.listen();
    let renderer;

    try {
      const jsx = story.render();
      const { unmount, rerender } = await render(jsx);

      // wait for state changes
      await act(() => {
        renderer = create(React.createElement(story.render));
        return new Promise((resolve) => setTimeout(resolve));
      });

      rerender(jsx);

      const snapshotFileName = converter.getSnapshotFileName(context);
      expect(renderer).toMatchSpecificSnapshot(snapshotFileName);

      unmount();
      done && done();
    } finally {
      server.close();
    }
  },
});
