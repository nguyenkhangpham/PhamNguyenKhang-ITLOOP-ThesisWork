import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import avatar from "assets/img/avatars/avatar_placeholder.png";
import { useStore } from "store";
import { CLI_COOKIE_KEYS, CliCookieService } from "services/cli-cookie";
import { toast } from "sonner";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
}) => {
  const { user, setUser, clearMedicines } = useStore();
  const { onOpenSidenav, brandText } = props;
  // const [darkmode, setDarkmode] = React.useState(false);

  const navigate = useNavigate();

  const handleOnLogout = () => {
    setUser({});
    CliCookieService.set(CLI_COOKIE_KEYS.ACCESS_TOKEN, "");
    clearMedicines();

    toast.success("Logout successfully");
    navigate("/auth", { replace: true });
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] flex-grow-0 items-center justify-around gap-2 rounded-full bg-white px-4 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:gap-1 xl:gap-2">
        <span
          className="flex mr-4 text-xl text-gray-600 cursor-pointer dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="w-5 h-5" />
        </span>
        <Dropdown
          button={
            <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="mt-3 ml-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {user.fullName}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="w-full h-px mt-3 bg-gray-200 dark:bg-white/20 " />

              <div className="flex flex-col pb-5 mt-2 ml-4">
                <p
                  onClick={handleOnLogout}
                  className="mt-3 text-sm font-bold text-red-500 hover:text-red-500"
                >
                  Log Out
                </p>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
