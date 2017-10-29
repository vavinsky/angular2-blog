import { Headers } from '@angular/http';
import { MockedComments } from './../models/mock-comments';
import { MockedUsers } from './../models/mock-users';

import { User } from './../models/user';
import { MockedTags } from './../models/mock-tags';
import { MockedPosts } from './../models/mock-posts';
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS, getStatusText, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';

const fakeJwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'

export class InMemoryDataService implements InMemoryDbService {
  users = MockedUsers;
  requiredAuthenticationUrls: string[] = [
    "api/tags",
  ];

  createDb() {

    let posts = MockedPosts;
    let tags = MockedTags;
    let users = this.users;
    let comments = MockedComments;
    return { posts, tags, users, comments };
  }

  get(requestInfo: RequestInfo) {

    let urls = this.requiredAuthenticationUrls.filter(url => requestInfo.url.includes(url));

    if (urls.length > 0) {
      return this.checkJwtToken(requestInfo);
    }

    return null;
  }

  put(requestInfo: RequestInfo) {
    return this.checkJwtToken(requestInfo);
  }

  delete(requestInfo: RequestInfo) {
    return this.checkJwtToken(requestInfo);
  }

  post(requestInfo: RequestInfo) {
    if (requestInfo.url.includes('/api/authenticate')) {
      return requestInfo.utils.createResponse$(() => {
        console.log('HTTP POST override');

        let params = JSON.parse(requestInfo.utils.getJsonBody(requestInfo.req));

        let filteredUsers = this.users.filter(user => {
          return user.username === params.username && user.password === params.password;
        });

        let user = null;
        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          user = filteredUsers[0];
        }

        let jwtToken = this.generateJwtToken(user, params.rememberMe);

        const options: ResponseOptions = user ?
          {
            body: {
              id: user.id,
              username: user.username,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              avatarImageUrl: user.avatarImageUrl,
              jwtToken: jwtToken
            },
            status: STATUS.OK
          } :
          {
            body: { error: `Username or password is incorrect.` },
            status: STATUS.UNAUTHORIZED
          };
        return this.finishOptions(options, requestInfo);

      });
    }

    return null;
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    
    if(url.startsWith('api/users?email=')){
      let query = new Map<string, string[]>();
      let start = 'api/users?email='.length;
      query.set('email', [url.substring(start)]);
      
      const result: ParsedRequestUrl = {
        apiBase: 'api/',
        collectionName: 'users',
        id: undefined,
        query: query,
        resourceUrl: 'api/users/'
      };

      return result;
    }

    const parsed = utils.parseRequestUrl(url);    
    return parsed;
  }

  private generateJwtToken(user: any, rememberMe: boolean | null) {
    // return fake jwt. In real backend server here will be encription of current user info and info about session expiration
    // if user checked params.rememberMe = true, then expiration timout will be set longer 
    return fakeJwtToken;
  }

  private checkJwtToken(requestInfo: RequestInfo) {

    let req: any = requestInfo && requestInfo.req ? requestInfo.req : null;
    let jwtToken = null;

    try {
      if (req && req.headers && req.headers.has('authorization')) {
        jwtToken = req.headers.get("authorization");
      }
    }
    catch (error) {
      console.log(error);
    }

    // compare with fake jwt token
    let isAuthorized = jwtToken == fakeJwtToken;

    if (!isAuthorized) {
      return requestInfo.utils.createResponse$(() => {
        const options: ResponseOptions = {
          status: STATUS.UNAUTHORIZED
        };

        return this.finishOptions(options, requestInfo);
      });
    }
    return null;
  }

  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}