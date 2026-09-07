# Professional Bug Report Template

## Defect ID
BUG-XXX

## Title
Concise statement of what is wrong, where it happens, and under what condition.

Example: `Registration allows users younger than 18 through the API`

## Environment
- Application/build:
- Browser/device:
- Operating system:
- Environment: Local / Dev / Staging / Production
- Account/test data:

## Preconditions
State anything that must already be true before reproducing the problem.

## Steps to Reproduce
1. Navigate to ...
2. Enter ...
3. Submit ...
4. Observe ...

## Expected Result
Describe what the requirement says should happen.

## Actual Result
Describe exactly what actually happened.

## Severity
Choose based on user/business impact:
- Critical — system unusable, security/data-loss, major transaction failure
- High — major functionality broken with no practical workaround
- Medium — functionality impaired but workaround exists
- Low — minor issue, cosmetic, or limited impact

## Priority
Choose based on urgency to the business/release:
- P0 — immediate action
- P1 — must fix before release / urgent
- P2 — should fix soon
- P3 — lower urgency/backlog

## Reproducibility
Always / Intermittent / Once

## Evidence
Attach screenshots, video, trace, console logs, network request/response, or relevant test output.

## Notes
Include suspected scope, related cases, regression risk, or anything useful to developers/product.

---

# Example

## Defect ID
BUG-001

## Title
Registration API accepts a 17-year-old user despite minimum-age requirement

## Environment
- Application/build: Registration service — current test build
- Environment: Dev
- Request type: POST registration API

## Preconditions
Registration endpoint is available and test user data is unique.

## Steps to Reproduce
1. Submit a registration request with a valid name/email and age `17`.
2. Send the request to the registration endpoint.
3. Inspect the response and resulting account state.

## Expected Result
The API rejects the request because the user is younger than the required minimum age of 18.

## Actual Result
The API creates the account successfully.

## Severity
High

## Priority
P1

## Reproducibility
Always

## Evidence
Attach request payload, response status/body, and account record or response identifier.

## Notes
If the UI blocks age 17 but the backend accepts it, the business rule can be bypassed by calling the API directly.
