import { AppGet } from "@/utils/request";

// 获取当前疫情信息
export function getEpidemicInfo() {
  return AppGet("/epidemic/list");
}
