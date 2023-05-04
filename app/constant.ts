export const OWNER = "jyrz";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `http://www.jyrz22.cn/`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `https://appulfjljvg3856.h5.xiaoeknow.com/p/t/free/v1/basic-platform/h5_basic/login/auth?redirect_url=https%3A%2F%2Fappulfjljvg3856.h5.xiaoeknow.com%2Fv1%2Fgoods%2Fgoods_detail%2Fp_64530854e4b0b2d1c41098e0%3Ftype%3D3%26share_type%3D5%26share_user_id%3Danonymous_NJpLEuUlQ2M0a12yy%26entry%3D2%26entry_type%3D2002`;
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
