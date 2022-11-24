import {QueryClient} from '@tanstack/react-query';
import {request, RequestDocument} from 'graphql-request';

type AnyOBJ = {[key: string]: any};

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return client;
  };
})();

// const BASE_URL = 'http://localhost:8000/epari/v1/';
const BASE_URL = 'http://j7a201.p.ssafy.io/epari/v1';
// const BASE_URL = '';
export const restFetcher = async ({
  method,
  path,
  Token,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  Token: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: Token,
      },
    };

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += '?' + searchParams.toString();
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const graphqlFetcher = (query: RequestDocument, variables = {}) =>
  request(BASE_URL, query, variables);

export const QueryKeys = {
  HERBLIST: 'HERBLIST',
  HERBDETAIL: 'HERBDETAIL',
};
