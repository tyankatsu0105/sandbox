/**
 * jsにしてjsdocでかく
 */
import { ReporterContext, ReporterOnStartOptions } from "@jest/reporters";

import { AggregatedResult } from "@jest/test-result";
import { Config } from "@jest/types";
import { Test } from "@jest/test-result";
import { TestCaseResult } from "@jest/test-result";
import { TestContext } from "@jest/test-result";
import { TestResult } from "@jest/test-result";

class CustomReporter {
  private _globalConfig: Config.GlobalConfig;
  private _options: {};
  private _context: ReporterContext;
  private _shouldFail: boolean;

  constructor(
    globalConfig: Config.GlobalConfig,
    reporterOptions: {},
    reporterContext: ReporterContext
  ) {
    this._globalConfig = globalConfig;
    this._options = reporterOptions;
    this._context = reporterContext;
    this._shouldFail = false;
  }

  onTestResult(
    test: Test,
    testResult: TestResult,
    aggregatedResult: AggregatedResult
  ): Promise<void> | void {}
  onTestFileResult(
    test: Test,
    testResult: TestResult,
    aggregatedResult: AggregatedResult
  ): Promise<void> | void {}
  onTestCaseResult?(
    test: Test,
    testCaseResult: TestCaseResult
  ): Promise<void> | void {}
  onRunStart(
    results: AggregatedResult,
    options: ReporterOnStartOptions
  ): Promise<void> | void {}
  onTestStart(test: Test): Promise<void> | void {}
  onTestFileStart(test: Test): Promise<void> | void {}
  onRunComplete(
    testContexts: Set<TestContext>,
    results: AggregatedResult
  ): Promise<void> | void {
    console.log("Custom reporter output:");
    console.log("global config: ", this._globalConfig);
    console.log("options for this reporter from Jest config: ", this._options);
    console.log("reporter context passed from test scheduler: ", this._context);
  }
  getLastError(): Error | void {
    if (this._shouldFail) {
      return new Error("Custom error reported!");
    }
  }
}

module.exports = CustomReporter;
