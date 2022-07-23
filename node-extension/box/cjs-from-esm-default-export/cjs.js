(async () => {
  const {default: hoge} = await import("./esm.mjs") // 拡張子必要

  console.log(hoge);
})()

/**
 * node box/cjs-from-esm-default-export/cjs.js
 * hoge
 */