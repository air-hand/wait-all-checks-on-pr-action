import {
    Endpoints,
    GetResponseTypeFromEndpointMethod,
    GetResponseDataTypeFromEndpointMethod,
 } from '@octokit/types';
//import { Octokit } from '@octokit/rest';
import { getOctokit } from '@actions/github';

const octokit = getOctokit("");

type GetCheckSuites = GetResponseDataTypeFromEndpointMethod<
    typeof octokit.rest.checks.listSuitesForRef
>;

interface IGitHubPRCheckSuitesFetcher {
    fetch(pr_id: number): GetCheckSuites;
}

export class GitHubPRCheckSuitesFetcher implements IGitHubPRCheckSuitesFetcher {
    constructor(private client: typeof octokit, private owner: string, private repo: string) {
        this.client = client;
        this.owner = owner;
        this.repo = repo;
    }

    async fetch(pr_id: number): GetCheckSuites {
        const response = await this.client.rest.checks.listSuitesForRef({
            owner: this.owner,
            repo: this.repo,
            ref: 'refs/pull/123/merge', // FIXME
        });

        return response.data;
    }
}