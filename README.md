# zynko-oracle · `javascript-acronym-parse-conformance-oracle`

**A deterministic, re-checkable conformance oracle for `acronym` (javascript).**

## Proven
Measured on the canonical Exercism corpus — **8 input/output pairs, 8 distinct outputs** — produced by *running* the reference in a sealed sandbox, not asserted.

## Scope (declared)
The corpus is the canonical Exercism test data for `acronym`. Inputs outside that set are **not covered**; this oracle decides agreement on the published corpus only and makes no claim of general correctness.

## Provenance
Reference: the Exercism reference solution for `acronym` (javascript; MIT, Exercism), body unchanged. Proven by the exercism testsuite (pin=7060ddb5a5870d10), re-executed by harvest in a sealed sandbox (unshare -rn) before this bundle was generated.

## License
Apache-2.0 for the scaffolding; the reference body retains its upstream MIT (Exercism) license.
