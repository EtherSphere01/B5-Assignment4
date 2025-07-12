import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="flex items-center gap-3">
                        <img
                            src="/book.png"
                            alt="Library Logo"
                            className="h-8 w-8 rounded-full"
                        />
                        <span className="text-lg font-bold text-gray-800">
                            World Library
                        </span>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-500 md:mt-0">
                        &copy; {new Date().getFullYear()} World Library. All
                        Rights Reserved. <br />
                        Dhaka, Bangladesh.
                    </p>
                </div>
            </div>
        </footer>
    );
}
