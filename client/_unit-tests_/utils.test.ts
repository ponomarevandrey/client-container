import { describe, expect, test } from "@jest/globals";
import {
  calculateExcludedStats,
  extractFilename,
  toHourMinSec,
  buildSearchQuery,
  exportPlaylistAsJSON,
  exportValidationReport,
  exportPlaylistToM3U,
  exportSavedFiltersToJSON,
  encodeRFC3986URIComponent,
  m3uToFilePaths,
  readFileAsString,
} from "../src/utils";

describe("extractFilename", () => {
  test("extracts the last part of the path", () => {
    expect(extractFilename("/no-one/likes/veggies")).toBe("veggies");
  });
});
