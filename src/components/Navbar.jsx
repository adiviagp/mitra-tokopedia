import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState(1);
  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow w-full sm:w-[500px] mx-auto"
    >
      <div id="tabs" className="flex justify-between">
        <NavLink
          to="/"
          className="w-full justify-center inline-block text-center pt-2 pb-1"
          children={({ isActive }) => {
            return isActive ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <path
                    d="M18.5 11.4v9h-13v-9c-1.1 0-2-.1-2 1v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-8c0-1.1-.9-1-2-1z"
                    fill="#00AA5B"
                  />
                  <path
                    d="M21.5 12.5h-19c-.9 0-1.3-1.1-.7-1.7l8.8-8.5c.8-.7 2-.7 2.8 0l8.8 8.5c.7.6.2 1.7-.7 1.7z"
                    fill="#00AA5B"
                  />
                  <path
                    d="M18.5 9.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2z"
                    fill="#00AA5B"
                  />
                  <path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff" />
                  <path
                    d="M14 15.5h-4c-.6 0-1 .4-1 1v6h6v-6c0-.6-.4-1-1-1z"
                    fill="#145638"
                  />
                </svg>
                <span className="tab tab-home block text-xs">Beranda</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <path
                    d="M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                    fill="#525A67"
                  />
                  <path
                    d="M21.9 9.2l-9.2-7.7c-.4-.3-.9-.3-1.3 0L2.2 9.2c-.8.6-.4 1.8.6 1.8H4v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-8h1.2c1 0 1.4-1.2.7-1.8z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M13.5 13h-3c-.6 0-1 .4-1 1v6h5v-6c0-.6-.4-1-1-1z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>
                <span className="tab tab-home block text-xs">Beranda</span>
              </>
            );
          }}
        />
        <NavLink
          to="/transaksi"
          className="w-full justify-center inline-block text-center pt-2 pb-1"
          children={({ isActive }) => {
            return isActive ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <path
                    d="M18 21H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1z"
                    fill="#00AA5B"
                    stroke="#00AA5B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M15 .8H9v2.4h6V.8z" fill="#fff" />
                  <path
                    d="M14.5 1.6v-.5h-5v1.8h5V1.6zM9 .5h6c.215 0 .347.058.413.11A.222.222 0 0 1 15.5.8v2.4c0 .088-.03.144-.087.19-.066.052-.198.11-.413.11H9c-.215 0-.347-.058-.413-.11A.222.222 0 0 1 8.5 3.2V.8c0-.088.03-.144.087-.19C8.653.558 8.785.5 9 .5z"
                    stroke="#145638"
                  />
                  <path
                    d="M9 8h6m-6 4h6m-6 4h3"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    stroke-linecap="round"
                  />
                  <path fill="#145638" d="M9 1h5v3H9z" />
                </svg>

                <span className="tab tab-kategori block text-xs">
                  Transaksi
                </span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mb-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 21H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 .8H9v2.4h6V.8z" fill="#fff" />
                  <path
                    d="M14.5 1.6v-.5h-5v1.8h5V1.6zM9 .5h6c.215 0 .347.058.413.11A.222.222 0 0 1 15.5.8v2.4c0 .088-.03.144-.087.19-.066.052-.198.11-.413.11H9c-.215 0-.347-.058-.413-.11A.222.222 0 0 1 8.5 3.2V.8c0-.088.03-.144.087-.19C8.653.558 8.785.5 9 .5z"
                    stroke="#525A67"
                  />
                  <path
                    d="M9 8h6m-6 4h6m-6 4h3"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path fill="#525A67" d="M9 1h5v3H9z" />
                </svg>

                <span className="tab tab-kategori block text-xs">
                  Transaksi
                </span>
              </>
            );
          }}
        ></NavLink>
        <NavLink
          to="/bantuan"
          className="w-full justify-center inline-block text-center pt-2 pb-1"
          children={({ isActive }) => {
            return isActive ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="10"
                    fill="#00AA5B"
                    stroke="#00AA5B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.818 14.88c0-.33.113-.6.336-.815.225-.213.512-.32.862-.32s.636.107.86.32c.226.214.337.485.337.814 0 .325-.11.592-.329.804-.219.211-.508.317-.868.317s-.65-.106-.868-.317a1.067 1.067 0 0 1-.33-.804z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.068 11.895c.032-.366.112-.676.216-.932.167-.41.474-.812.92-1.209.446-.397.743-.72.89-.97a1.52 1.52 0 0 0 .223-.788c0-.835-.384-1.252-1.153-1.252-.365 0-.657.113-.877.338a1.1 1.1 0 0 0-.212.31c-.185.399-.623.619-1.064.619-.71 0-1.225-.736-.923-1.378.15-.319.358-.597.625-.834C9.312 5.266 10.13 5 11.163 5c1.045 0 1.856.253 2.432.758.577.505.866 1.22.866 2.143 0 .418-.094.814-.282 1.187-.186.372-.515.785-.983 1.239l-.598.57a2.03 2.03 0 0 0-.644 1.266s-.101.63-.938.63c-.804 0-.977-.556-.948-.898z"
                    fill="#145"
                  />
                </svg>

                <span className="tab tab-kategori block text-xs">Bantuan</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mb-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.818 15.88c0-.33.113-.6.336-.815.225-.213.512-.32.862-.32s.636.107.86.32c.226.214.337.485.337.814 0 .325-.11.592-.329.804-.219.211-.508.317-.868.317s-.65-.106-.868-.317a1.066 1.066 0 0 1-.33-.804zm.25-2.985c.032-.366.112-.676.216-.932.167-.41.474-.812.92-1.209.446-.397.743-.72.89-.97a1.52 1.52 0 0 0 .223-.788c0-.835-.384-1.252-1.153-1.252-.365 0-.657.113-.877.338a1.1 1.1 0 0 0-.212.31c-.185.399-.623.619-1.064.619-.71 0-1.225-.736-.923-1.378.15-.319.358-.597.625-.834.599-.533 1.416-.799 2.45-.799 1.045 0 1.856.253 2.432.758.577.505.866 1.22.866 2.143 0 .418-.094.814-.282 1.187-.186.372-.515.785-.983 1.239l-.598.57a2.03 2.03 0 0 0-.644 1.266s-.101.63-.938.63c-.804 0-.977-.556-.948-.898z"
                    fill="#525A67"
                  />
                </svg>

                <span className="tab tab-explore block text-xs">Bantuan</span>
              </>
            );
          }}
        ></NavLink>
        <NavLink
          to="/akun"
          className="w-full justify-center inline-block text-center pt-2 pb-1"
          children={({ isActive }) => {
            return isActive ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <path
                    d="M9 11.3a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6zm-8.2 7v1.9c0 .6.4 1 1 1h14.5c.6 0 1-.4 1-1v-1.9c0-1-1-6.3-8.2-6.3-7.2 0-8.3 5.4-8.3 6.3z"
                    fill="#05AA5B"
                    stroke="#00AA5B"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path d="M12 7c0 1.7-1.3 3-3 3S6 8.7 6 7" fill="#fff" />
                  <path
                    d="M9 18c-2.2 0-4-1.8-4-4 0-.6.4-1 1-1s1 .4 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-.6.4-1 1-1s1 .4 1 1c0 2.2-1.8 4-4 4z"
                    fill="#145638"
                  />
                </svg>
                <span className="tab tab-whishlist block text-xs">Akun</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mb-1"
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                >
                  <path
                    d="M9 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-8 7v2c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-2c0-1-1-6.5-8-6.5S1 16 1 17z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>

                <span className="tab tab-whishlist block text-xs">Akun</span>
              </>
            );
          }}
        ></NavLink>
      </div>
    </section>
  );
};

export default Navbar;
