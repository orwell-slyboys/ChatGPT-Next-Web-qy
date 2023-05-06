export const OWNER = "jyrz";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `http://test.mpay8.cn/pages/20230506/cnqggLokL9ooqhF.html`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const Buy_URL = `https://appulfjljvg3856.h5.xiaoeknow.com/p/decorate/homepage?share_user_id=anonymous_A9mkXFpUh8RhxLq8T&wework_share_customer_id=anonymous_A9mkXFpUh8RhxLq8T&entry=2&entry_type=200`;
export const UPDATE_URL = `https://appulfjljvg3856.h5.xiaoeknow.com/p/decorate/homepage?share_user_id=anonymous_A9mkXFpUh8RhxLq8T&wework_share_customer_id=anonymous_A9mkXFpUh8RhxLq8T&entry=2&entry_type=2002`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;
