# QA-001 — Requirements, Test Scenarios, and Boundary Analysis

## Objective
Learn to convert a product requirement into testable conditions, identify assumptions, design positive/negative/boundary tests, and document expected behavior.

## Requirement Under Test
> A user must be at least 18 years old to register.

## QA Analysis
A QA professional does not test only the happy path. The requirement creates several questions:

- Is age entered directly or derived from date of birth?
- Is 18 inclusive? The wording implies yes.
- Are decimals valid?
- Are negative numbers rejected?
- Is blank input rejected?
- Are letters or special characters rejected?
- Is there a maximum realistic age?
- Is validation enforced only in the UI, or also by the backend/API?
- What error message should the user see?
- Can a user bypass the restriction by modifying a request?

## Test Design Techniques

### 1. Positive Testing
Verify valid inputs behave correctly.

Examples: 18, 19, 25, 65.

### 2. Negative Testing
Verify invalid inputs are rejected safely and clearly.

Examples: 17, -1, blank, `abc`, special characters.

### 3. Boundary Value Analysis
Defects often occur at the edge of an allowed range.

For minimum age 18, the critical boundary values are:

- 17 — just below boundary
- 18 — exact boundary
- 19 — just above boundary

## Test Cases

| ID | Scenario | Input | Expected Result | Type |
|---|---|---:|---|---|
| TC-001 | User is exactly minimum age | 18 | Registration allowed | Boundary / Positive |
| TC-002 | User is below minimum age | 17 | Registration blocked with clear validation message | Boundary / Negative |
| TC-003 | User is above minimum age | 19 | Registration allowed | Boundary / Positive |
| TC-004 | Normal adult value | 25 | Registration allowed | Positive |
| TC-005 | Zero age | 0 | Registration blocked | Negative |
| TC-006 | Negative age | -1 | Registration blocked | Negative |
| TC-007 | Blank age | blank | Registration blocked and required-field message shown | Negative |
| TC-008 | Alphabetic input | abc | Input rejected or validation error shown | Negative |
| TC-009 | Decimal age | 17.9 | Registration blocked unless specification explicitly permits decimals | Negative / Boundary |
| TC-010 | Decimal at minimum | 18.0 | Behavior must match product specification | Boundary |
| TC-011 | Extremely large number | 999 | Registration blocked or constrained according to defined validation rules | Negative |
| TC-012 | Client-side validation bypass | API request with age 17 | Backend must still reject registration | Security / API |

## Expected QA Output
After executing these cases, record:

1. Actual result.
2. Pass or fail.
3. Evidence where useful (screenshot, trace, request/response, logs).
4. Defect ID for failures.
5. Environment and build/version tested.

## Interview Language
A strong answer to "How would you test an age requirement?":

> I would first clarify the acceptance criteria and source of truth for age. Then I would use equivalence partitioning and boundary value analysis, focusing on 17, 18, and 19, while also testing invalid inputs such as blank values, negatives, strings, decimals, and unrealistic values. I would verify validation at both the UI and API layers so the business rule cannot be bypassed client-side, and I would document actual versus expected behavior with reproducible evidence.

## Exercise
Create test cases for this requirement:

> Passwords must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.

Do not automate it yet. First think like QA: identify assumptions, boundaries, valid partitions, invalid partitions, and bypass possibilities.
