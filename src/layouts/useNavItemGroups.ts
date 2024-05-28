import { useMemo } from "react";
import { NavItemGroup } from "./NavitemGroup";
import getNavItemGroups from "./nav";
import compact from "lodash/compact";
import React from "react";

export default function useNavItemGroups() {
  // const hasPermission = useHasPermission();
  // Check to see if any nav item groups declare an application feature name.
  // If yes, then we must fetch all the application features that the current user has seen.
  // Otherwise, we can optimize and skip that API call.

  const { navItemGroups } = useMemo(() => {
    const groups = getNavItemGroups() as NavItemGroup[];

    return {
      navItemGroups: groups,
    };
  }, []);

  return useMemo(() => {
    // Recursive function if the nav group definition has children.
    const filterGroup = (group: NavItemGroup): NavItemGroup | null => {
      const newGroup = { ...group };

      if (newGroup.children) {
        const filtered = compact(newGroup.children.map(filterGroup));

        // Only show the nav item if it has visible child items.
        return filtered.length !== 0
          ? {
              ...newGroup,
              children: filtered,
            }
          : null;
      }
      return newGroup;
    };
    return compact(navItemGroups.map(filterGroup));
  }, [navItemGroups]);
}
