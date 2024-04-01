import type {MDX} from "contentlayer/core";

import * as Local from "contentlayer/source-files";

import {removeFromLast} from "@/utils";

export interface Route {
  key?: string;
  title?: string;
  subtitle?: string;
  section?: string;
  heading?: boolean;
  keywords?: string;
  iconSrc?: string;
  defaultOpen?: boolean;
  path?: string;
  routes?: Route[];
  updated?: boolean;
  newPost?: boolean;
  comingSoon?: boolean;
}

export interface Doc {
  _id: string;
  _raw: Local.RawDocumentData;
  type: string;
  title: string;
  description: string;
  body: MDX;
  slug: string;
  slugAsParams: string;
  url: string;
}

export interface RouteContext {
  parent?: Route;
  route?: Route;
  nextRoute?: Route;
  prevRoute?: Route;
}

export interface Carry {
  params: {slug: any};
}

export function addTagToSlug(slug: string, tag?: string) {
  return tag ? slug.replace("/docs", `/docs/tag/${tag}`) : slug;
}

export function findRouteByPath(path: string, routes: Route[]): Route | null | undefined {
  for (const route of routes) {
    if (route.path && removeFromLast(route.path, ".") === path) {
      return route;
    }
    const childPath = route.routes ? findRouteByPath(path, route.routes) : null;

    if (childPath) return childPath;
  }
}

export function getPaths(nextRoutes: Route[], carry: Carry[] = [{params: {slug: []}}]) {
  nextRoutes.forEach((route: Route) => {
    if (route.comingSoon) {
      return;
    }
    if (route.path) {
      carry.push(removeFromLast(route.path, ".") as Carry);
    } else if (route.routes) {
      getPaths(route.routes, carry);
    }
  });

  return carry;
}
