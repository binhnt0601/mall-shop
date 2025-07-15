import LocaleDropdownDesktop from "./Desktop";
import LocaleDropdownMobile from "./Mobile";

export default function LocaleDropdown() {
  return (
    <>
      <div className="block md:hidden w-full mb-2">
        <LocaleDropdownMobile />
      </div>
      <div className="hidden md:inline-block">
        <LocaleDropdownDesktop />
      </div>
    </>
  );
}
