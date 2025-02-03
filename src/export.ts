import {WorkflowRunEvent} from '@octokit/webhooks-types';


export function export_check_suites(event: WorkflowRunEvent) {
    const workflow_run = event.workflow_run;
    if (workflow_run.pull_requests.length == 0) {
        return;
    }
}

export function check_suite_ids_on_pr(pr_number: number): Array<number> {
    return;
}
