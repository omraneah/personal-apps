import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "./_lib/i18n";

export default function AlfRoot() {
  redirect(`/african-legal-factory/${DEFAULT_LOCALE}`);
}
