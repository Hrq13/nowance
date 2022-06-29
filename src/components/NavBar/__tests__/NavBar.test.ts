import { mount, VueWrapper, enableAutoUnmount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import router from "@/router";

import NavBar from "../NavBar.vue";
import type { Link as NavBarLink } from "@/types/NavBar.types";

const mockLinks: NavBarLink[] = [
  {
    label: "Dashboard",
    path: { name: "dashboards" },
  },
  {
    label: "Create transaction",
    path: { name: "create-transaction" },
  },
  {
    label: "See history",
    path: { name: "history" },
  },
];

describe("NavBar", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(NavBar, {
      global: {
        plugins: [router],
      },
      props: {
        links: mockLinks,
      },
    });
  });

  enableAutoUnmount(afterEach);

  it("renders logo with correct link", () => {
    const logoWrapper = wrapper.find(".navbar-brand");

    expect(logoWrapper.attributes("href")).toEqual(
      router.resolve({ name: "home" }).href
    );
  });

  it("renders list of links with correct labels", () => {
    const linkWrappers = wrapper.findAll(".dropdown-item");

    expect(linkWrappers.length).toEqual(mockLinks.length);

    const renderedLinkList = linkWrappers.map((linkWrapper) =>
      linkWrapper.text()
    );
    const expectedLinkList = mockLinks.map((mockLink) => mockLink.label);

    expect(renderedLinkList).toEqual(expectedLinkList);
  });

  it("renders list of links with correct href path", async () => {
    const linkWrappers = wrapper.findAll(".dropdown-item");

    await linkWrappers[1].trigger("click");

    expect(linkWrappers[0].attributes("href")).toEqual(
      router.resolve(mockLinks[0].path).href
    );

    expect(linkWrappers[1].attributes("href")).toEqual(
      router.resolve(mockLinks[1].path).href
    );

    expect(linkWrappers[2].attributes("href")).toEqual(
      router.resolve(mockLinks[2].path).href
    );
  });
});
