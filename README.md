# wait-all-checks-on-pr-action

## Usage

```
on:
  workflow_run:
    workflows:
      - "*"
    types:
      - completed

jobs:
  wait-all-checks:
    runs-on: ubuntu-latest
    permissions:
      checks: read
      pull-requests: write
    steps:
      - name: Wait for all checks
        id: checks
        uses: air-hand/wait-all-checks-on-pr-action@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          pr: ${{ github.event.workflow_run.head_repository.full_name }}
          run_id: ${{ github.event.workflow_run.id }}
          check_run_id: ${{ github.event.workflow_run.check_suite.id }}
      - name: merge pr if all checks passed
        if: steps.checks.outputs.all_checks_passed == 'true'
        run: |
          gh pr merge ${PR_URL} --squash
        env:
          PR_URL: ${{ github.event.workflow_run.head_repository.html_url }}/pull/${{ github.event.workflow_run.head_branch }}
```

