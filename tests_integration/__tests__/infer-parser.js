"use strict";

const runPrettier = require("../runPrettier");
const prettier = require("prettier/local");

describe("stdin no path and no parser", () => {
  describe("logs error and exits with 2", () => {
    runPrettier("cli/infer-parser/", ["--stdin"], { input: "foo" }).test({
      status: 2,
      stdout: "",
      write: []
    });
  });

  describe("--list-different logs error but exits with 0", () => {
    runPrettier("cli/infer-parser/", ["--list-different", "--stdin"], {
      input: "foo"
    }).test({
      status: 0,
      stdout: "",
      write: []
    });
  });
});

describe("stdin with unknown path and no parser", () => {
  describe("logs error and exits with 2", () => {
    runPrettier("cli/infer-parser/", ["--stdin", "--stdin-filepath", "foo"], {
      input: "foo"
    }).test({
      status: 2,
      stdout: "",
      write: []
    });
  });

  describe("--list-different logs error but exits with 0", () => {
    runPrettier(
      "cli/infer-parser/",
      ["--list-different", "--stdin", "--stdin-filepath", "foo"],
      { input: "foo" }
    ).test({
      status: 0,
      stdout: "",
      write: []
    });
  });
});

describe("unknown path and no parser", () => {
  describe("specific file", () => {
    runPrettier("cli/infer-parser/", ["FOO"]).test({
      status: 2,
      stdout: "",
      write: []
    });
  });

  describe("multiple files", () => {
    runPrettier("cli/infer-parser/", ["*"]).test({
      status: 2,
      write: []
    });
  });
});

describe("--list-different with unknown path and no parser", () => {
  describe("specific file", () => {
    runPrettier("cli/infer-parser/", ["--list-different", "FOO"]).test({
      status: 0,
      stdout: "",
      write: []
    });
  });

  describe("multiple files", () => {
    runPrettier("cli/infer-parser/", ["--list-different", "*"]).test({
      status: 1,
      stdout: "foo.js\n",
      write: []
    });
  });
});

describe("--write with unknown path and no parser", () => {
  describe("specific file", () => {
    runPrettier("cli/infer-parser/", ["--write", "FOO"]).test({
      status: 2,
      stdout: "",
      write: []
    });
  });

  describe("multiple files", () => {
    runPrettier("cli/infer-parser/", ["--write", "*"]).test({
      status: 2
    });
  });
});

describe("--write and --list-different with unknown path and no parser", () => {
  describe("specific file", () => {
    runPrettier("cli/infer-parser/", [
      "--list-different",
      "--write",
      "FOO"
    ]).test({
      status: 0,
      stdout: "",
      write: []
    });
  });

  describe("multiple files", () => {
    runPrettier("cli/infer-parser/", ["--list-different", "--write", "*"]).test(
      { status: 1 }
    );
  });
});

describe("API with no path and no parser", () => {
  expect(() => prettier.format("foo")).toThrowErrorMatchingSnapshot();
});
