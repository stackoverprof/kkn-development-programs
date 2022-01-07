import React, { useEffect } from "react";
import MainLayout from "@components/_layouts/MainLayout";
import { useLayout } from "@core/contexts";
import Link from "@components/_shared/Link";

const Index = (): JSX.Element => {
  const { Alert } = useLayout();

  useEffect(() => {
    Alert("Sekarang! jangan nanti nanti!", "danger");
  }, []);

  return (
    <MainLayout title="Home" className="flex-sc col">
      <h1 className="mb-4 mt-48 text-4xl font-bold text-center z-10">
        WOY PRESENSI!
      </h1>
      <p className="max-w-sm mb-8 text-center z-10">
        Udah bolong tiga kali, pls jgn lupa lagi!
      </p>

      <div className="flex-cc gap-4 z-10">
        <Link
          href="https://simaster.ugm.ac.id/kkn/presensi/view"
          className="px-4 py-2 text-white bg-accent hover:bg-opacity-80"
        >
          PRESENSI DISINI
        </Link>
      </div>

      <div
        className="fixed bottom-0 w-full h-1/4 bg-cover flex-cc"
        style={{
          backgroundImage: "url(https://svgshare.com/i/_H4.svg)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <p className="flex-cc gap-1 text-lg">
          Timeline prokeran disini :
          <Link
            href="https://docs.google.com/spreadsheets/d/1LOlMw2sogtJqYt-C6u6flH_FD8RNKyNAVByxQjzq6Q4/edit#gid=1177070534"
            target="_blank"
            className="font-bold underline"
          >
            Umum
          </Link>
          -
          <Link
            href="https://docs.google.com/spreadsheets/d/15gxNCKFQXYJYjTHU2q3DPkB_QmYfmXeD9wGnATPeAwY/edit#gid=0"
            target="_blank"
            className="font-bold underline"
          >
            Pribadi
          </Link>
        </p>
      </div>
    </MainLayout>
  );
};

// Above are sample use of

// useLayout: which is a custom hooks in context management
// Alert: custom popping out alert box that automatically vanish
// Link: custom link that can be styled into anything and is so comfortable
// MainLayout: open 'components/_layouts/', that is the place where you put navbar and footer, not here

export default Index;
