import { StatusPage } from "@/components/common/StatusPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <StatusPage title="404" text="Page Not Found" />;
}
