export interface Item {
  id: string,
  name: string,
  price: number,
  details?: string,
  icon_override?: string,
  category: string
}

export interface ItemCategory {
  name: string,
  icon: string,
  id: string,
  items: Record<string, Item>,
}

const categories: Record<string, ItemCategory> = {
  items: {
    name: "Items",
    icon: "credit_card",
    id: "items",
    items: {
      id_captain: {
        id: "id_captain",
        name: "Captain ID (3 rounds)",
        price: 14.99,
        category: "items"
      },
      id_head: {
        id: "id_head",
        name: "Head of Staff ID (5 rounds)",
        price: 12.99,
        details: "Offer does not apply to Captain or HOP IDs",
        category: "items"
      },
      id_spare: {
        id: "id_spare",
        name: "Spare ID",
        price: 49.99,
        details: "Note: This is a spare ID, not the captain's spare ID",
        category: "items"
      },
      id_syndi: {
        id: "id_syndi",
        name: "Syndicate ID",
        price: 0.99,
        details: "Worthless piece of junk we found",
        category: "items"
      },
      item_pai: {
        id: "item_pai",
        name: "Personal AI",
        price: 9.99,
        details: "An earlier prototype of the personal AI",
        category: "items"
      },
      item_sword: {
        id: "item_sword",
        name: "Law Enforcer",
        price: 14.99,
        details: "The perfect tool for any wannabe security officer",
        category: "items"
      },
      item_stunbaton: {
        id: "item_stunbaton",
        name: "Stunbaton",
        price: 14.99,
        details: "The perfect tool for any wannabe antag",
        category: "items"
      }
    }
  },
  unbans: {
    name: "Punishments and Unbans",
    icon: "gavel",
    id: "unbans",
    items: {
      unban_perma: {
        id: "unban_perma",
        name: "Unban (Permanent Ban)",
        price: 19.99,
        category: "unbans"
      },
      unban_temp: {
        id: "unban_temp",
        name: "Unban (Temporary Ban)",
        price: 9.99,
        category: "unbans"
      },
      note: {
        id: "note",
        name: "Note Removal (x3)",
        price: 2.99,
        category: "unbans"
      },
      ban_perma: {
        id: "ban_perma",
        name: "Ban a Player! (Permanent)",
        price: 19.99,
        icon_override: "ban_perma.gif",
        details: "!ban alexkar598 annoyed me one time too many",
        category: "unbans"
      },
      ban_temp: {
        id: "ban_temp",
        name: "Ban a Player! (Temporary)",
        price: 9.99,
        icon_override: "ban_temp.gif",
        category: "unbans"
      }
    }
  },
  ranks: {
    name: "Ranks",
    icon: "military_tech",
    id: "ranks",
    items: {
      rank_coder_24h: {
        id: "rank_coder_24h",
        name: "Coder Rank (24 hours)",
        price: 1.99,
        category: "ranks"
      },
      rank_coder_1w: {
        id: "rank_coder_1w",
        name: "Coder Rank (1 week)",
        price: 4.99,
        category: "ranks"
      },
      rank_coder_1m: {
        id: "rank_coder_1m",
        name: "Coder Rank (1 month)",
        price: 9.99,
        category: "ranks"
      },
      rank_admin_24h: {
        id: "rank_admin_24h",
        name: "Admin Rank (24 hours)",
        price: 5.99,
        category: "ranks"
      },
      rank_admin_1w: {
        id: "rank_admin_1w",
        name: "Admin Rank (1 week)",
        price: 9.99,
        category: "ranks"
      },
      rank_admin_1m: {
        id: "rank_admin_1m",
        name: "Admin Rank (1 month)",
        price: 14.99,
        category: "ranks"
      },
      rank_mentor: {
        id: "rank_mentor",
        name: "Mentor Rank (Forever)",
        price: -50.00,
        category: "ranks"
      },
      rank_alexkar598: {
        id: "rank_alexkar598",
        name: "Retcoder Rank",
        price: NaN,
        details: "OH GOD NOTHING IS WORKING",
        category: "ranks"
      }
    }
  },
  powers: {
    name: "Powers and consumables",
    icon: "bolt",
    id: "powers",
    items: {
      power_revive: {
        id: "power_revive",
        name: "Admin Heal (x5)",
        price: 2.99,
        category: "powers"
      },
      power_podmin: {
        id: "power_podmin",
        name: "Summon the power of the podmin (x10)",
        price: 9.99,
        details: "Legends say the one who controls the pods is the one who crashes the server -Sun Tzu, the art of war",
        category: "powers"
      },
      power_teleport: {
        id: "power_teleport",
        name: "Teleportation (x15)",
        price: 14.99,
        details: "Note: The destination is absolute, make sure to account for the station orbit around the planet.",
        category: "powers"
      },
      power_spawn: {
        id: "power_spawn",
        name: "Spawn Item (x2)",
        price: 24.99,
        details: "/obj/item/gun/energy/instagib",
        category: "powers"
      }
    }
  },
  playtime: {
    name: "Playtime",
    icon: "more_time",
    id: "playtime",
    items: {
      playtime_5h: {
        id: "playtime_5h",
        name: "5h of general playtime",
        price: 3.99,
        details: "Ants not included",
        category: "playtime"
      },
      playtime_20h: {
        id: "playtime_20h",
        name: "20h of general playtime",
        price: 9.99,
        category: "playtime"
      },
      playtime_100h: {
        id: "playtime_100h",
        name: "100h of general playtime",
        price: 19.99,
        details: "Premium offer!",
        category: "playtime"
      },
      playtime_job_5h: {
        id: "playtime_job_5h",
        name: "5h of job specific playtime",
        price: 9.99,
        category: "playtime"
      },
      playtime_job_20h: {
        id: "playtime_job_20h",
        name: "20h of job specific playtime",
        price: 19.99,
        category: "playtime"
      },
      playtime_job_100h: {
        id: "playtime_job_100h",
        name: "100h of job specific playtime",
        price: 34.99,
        details: "Professionally incompetant",
        category: "playtime"
      }
    }
  }
}

export interface Cart {
  items: Set<Item>;
  total: string;
}

export { categories }
