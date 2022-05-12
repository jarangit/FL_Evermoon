"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./state/global.tsx
var global = __webpack_require__(2719);
;// CONCATENATED MODULE: external "react-toastify"
const external_react_toastify_namespaceObject = require("react-toastify");
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/image.tsx
var components_image = __webpack_require__(6534);
;// CONCATENATED MODULE: ./public/assets/footer/left.png
/* harmony default export */ const left = ({"src":"/_next/static/media/left.4adaf4b0.png","height":380,"width":380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXF0Vj2ZerqqrL48OUtNXG9fZn9aYoq0tccMABrFy9eRj6UsI0ZeaIYvJjpYTFAuGiWLa0pYYGsqGR1fan8gER5lTDg4NUYrGRE0Ixu3N4NmAAAAFnRSTlMAn4iqkg5a/SUIXdFzH6zlf9VwTJlIo8EuOwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADxJREFUCJklyFkOgCAMANFBgYo7i1Xvf1FDnZ+XDPSGyWAef9NiI7H6rstut6+qh9+A97lFJAaus5YWAx8lAAGhcU6r+gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/footer/right.png
/* harmony default export */ const right = ({"src":"/_next/static/media/right.bb945e70.png","height":598,"width":342,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAP1BMVEVMaXEmx9leyOqp8O56hcl93N6c3+Nuy9tZ2NyK3d9ZY62IudZZZqWLmMqmvdi44+FZYKVeaKlfZK2a3998jLddDDnxAAAAFXRSTlMAE1iKbqReaSiQ28/TSOSH9+uRafeoNuiZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVQImQXBBwIAEAwAsUOp2uv/b5UAOYPTCJoMrjfoGkDGRParnFXaBw4eAPaxe9yLAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/LinkNewTab.tsx

function LinkNewTab({ children , href  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        target: "_blank",
        rel: "noreferrer",
        children: children
    }));
};

;// CONCATENATED MODULE: ./public/assets/socials/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.d8716ede.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./public/assets/socials/discord.svg
/* harmony default export */ const discord = ({"src":"/_next/static/media/discord.5d7989cb.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./public/assets/socials/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.c4edb633.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./public/assets/socials/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.d5d494df.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./public/assets/socials/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.b7312675.svg","height":32,"width":32});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/footer/index.tsx












const Footer = ({ className  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: 'relative z-0 ' + className,
        style: {
            background: 'linear-gradient(180deg, #03091A 0%, #03091A 0.01%, #000000 100%)'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                className: "hidden md:block absolute left-0 bottom-0 w-48 -z-10",
                src: left,
                alt: "left",
                priority: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                className: "absolute right-0 bottom-0 w-28 md:w-40 -z-10",
                src: right,
                alt: "right",
                priority: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute left-0 right-0 max-w-7xl mx-auto px-8 h-[1px] bg-gold opacity-30"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col md:flex-row flex-wrap justify-between lg:max-w-5xl lg:mx-auto py-12 px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-[187px] md:max-w-[217px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-source text-center",
                            children: "NFT multichain MOBA game"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full max-w-[310px] mt-20 md:mt-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-tavi font-semibold text-2xl text-gold-gradient",
                                children: "EXPLORE"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-4 grid grid-cols-2 gap-y-6 font-source",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/#Home",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "HOME"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/#RoadMap",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "ROADMAP"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/#Feature",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "ABOUT GAME"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkNewTab, {
                                        href: "https://docs.evermoon.games/evermoon/",
                                        children: "WHITEPAPER"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-[217px] mt-12 md:mt-0 mb-12 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-tavi font-semibold text-2xl text-gold-gradient",
                                children: "COMMUNITY"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-4 grid grid-cols-3 gap-y-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkNewTab, {
                                        href: "https://t.me/Evermoon_Community",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                            className: "w-8",
                                            src: telegram,
                                            alt: "Telegram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkNewTab, {
                                        href: "https://discord.com/invite/VgtZZwWbuG",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                            className: "w-8",
                                            src: discord,
                                            alt: "Discord"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkNewTab, {
                                        href: "https://www.facebook.com/EvermoonOfficialGameFi",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                            className: "w-8",
                                            src: facebook,
                                            alt: "Facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkNewTab, {
                                        href: "https://twitter.com/EverMoon_nft",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                            className: "w-8",
                                            src: twitter,
                                            alt: "Twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkNewTab, {
                                        href: "https://www.youtube.com/channel/UCFxqPU4dTufi07B13w_mMuw/videos",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                            className: "w-8",
                                            src: youtube,
                                            alt: "Youtube"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/header/Link.tsx


function Link({ title , href , current  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "px-2 min-w-[8.5rem] flex flex-col items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `px-8 py-2 font-source text-lg text-center whitespace-nowrap ${current && 'bg-gold-gradient'} ${current ? 'text-gold font-semibold' : 'text-white'}`,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `w-full h-[1.5px] rounded-xl -translate-y-1/2 ${current && 'bg-gold'}`
                    })
                ]
            })
        })
    }));
}
function ComingSoonLink({ title  }) {
    return(/*#__PURE__*/ _jsx("div", {
        className: "mx-1 px-4 relative min-w-[11.5rem] flex justify-center",
        children: /*#__PURE__*/ _jsxs("div", {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: `px-8 py-2 font-source text-lg text-disable min-w-[12rem]`,
                    children: title
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: `absolute bottom-0 translate-y-1/2 px-8 text-sm font-source text-gold-gradient`,
                    children: "COMING SOON"
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.6a8b7ae1.png","height":381,"width":1905,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEXAolvIqVy9n1itpkRAAAAAA3RSTlNqXFIsXaioAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVQImWNgYGJgZGJgYAQAACUAB39i4HMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/hamburger.svg
/* harmony default export */ const hamburger = ({"src":"/_next/static/media/hamburger.d2165a25.svg","height":28,"width":28});
// EXTERNAL MODULE: ./public/assets/general/icon/x.svg
var x = __webpack_require__(3342);
;// CONCATENATED MODULE: ./public/assets/starbg.svg
/* harmony default export */ const starbg = ({"src":"/_next/static/media/starbg.de972393.svg","height":758,"width":390});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(7505);
;// CONCATENATED MODULE: ./public/assets/header/Avatar.png
/* harmony default export */ const Avatar = ({"src":"/_next/static/media/Avatar.0b792cf9.png","height":118,"width":118,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEW6mFkvSGjxxHn/4WGXe08gM1EKEyFMaXE5W4MzUng9ZI1IdKIpQWAlMkUfK0MvMDNIa5FFaI0iMz8ZHSc0RF1KV2pATV9bYFxMXWcuUHoOHDAqQWBMeapQhr88ZJKJZt0zAAAAG3RSTlMW9yIJL/skAP39/P6es6B26vVPw7HVpH+q6+gHR+WBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVQImQXBhQHAIBAEsMNe0LpBu/+YTcDOem/BwLndmQHgMu/UFsAfPc0iBbsGlTQMSogStWfQqt+Qh8CuBlOJf1zrAsFEwdQXAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/header/wallet.svg
/* harmony default export */ const wallet = ({"src":"/_next/static/media/wallet.3864c5f7.svg","height":16,"width":17});
;// CONCATENATED MODULE: ./public/assets/header/copy.svg
/* harmony default export */ const copy = ({"src":"/_next/static/media/copy.b161a8eb.svg","height":13,"width":12});
// EXTERNAL MODULE: ./components/button/goldButton.tsx
var goldButton = __webpack_require__(7722);
;// CONCATENATED MODULE: ./components/header/Profile.tsx








function Profile(props) {
    const { isConnected , setIsConnected  } = (0,external_react_.useContext)(global/* GlobalContext */.k);
    return isConnected ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: 'flex justify-center' + props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-end mr-3 font-source",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-semibold text-lg text-gold-gradient",
                        children: "0.682 EVM"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex text-xs text-[#C2C2C2]",
                        onClick: ()=>setIsConnected(false)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                className: "w-4 mr-1",
                                src: copy,
                                alt: "Avatar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "0x1231...daw3HEJ"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                className: "w-12",
                src: Avatar,
                alt: "Avatar"
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-56",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(goldButton/* GoldButton */.g, {
            className: "hover:cursor-pointer text-sm",
            onClick: ()=>setIsConnected(true)
            ,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                    className: "w-4 mr-2 my-2",
                    src: wallet,
                    alt: "Wallet"
                }),
                " CONNECT WALLET"
            ]
        })
    });
};

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/cardUser/cardUser.tsx



const CardUser = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "m-6 border p-4 rounded-[10px] bg-[#121624] border-[#5c503a]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/assets/capsules/png/icon/avatar.png",
                    alt: "",
                    width: "55px",
                    height: "55px"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-gold-gradient font-bold ",
                            children: "0.682 EVM"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-disable",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mr-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: '/assets/capsules/png/icon/copy.png',
                                        alt: "copy",
                                        width: "12px",
                                        height: "12px"
                                    })
                                }),
                                "0x1231...daw3HEJ"
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const cardUser = (CardUser);

;// CONCATENATED MODULE: ./components/cardUser/index.ts


;// CONCATENATED MODULE: ./components/header/index.tsx










// import MarketplaceSmall from '../../public/assets/marketsmall.svg'




const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "relative mx-auto w-full z-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-6 py-5 flex items-center md:max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden lg:inline",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                    className: "w-28 md:w-40",
                                    src: logo,
                                    alt: "logo"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderDesktop, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderMobile, {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute left-0 right-0 h-[1px] bg-gold opacity-30"
            })
        ]
    }));
};
/* harmony default export */ const header = (Header);
function HeaderDesktop() {
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden xl:flex w-full ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center mr-auto z-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                        title: "MARKETPLACE",
                        href: "#MARKETPLACE",
                        current: router.asPath == "/MARKETPLACE" ? true : false
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                        title: "CAPSULES",
                        href: "/capsules",
                        current: router.asPath == "/capsules" ? true : false
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover, {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Popover.Button, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                                    title: "DE-FI",
                                    href: "#De-fi",
                                    current: router.asPath == "/DE-FI" ? true : false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition, {
                                as: external_react_.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Popover.Panel, {
                                    className: "absolute z-10 w-screen max-w-[170px] ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-6 relative z-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "py-4 pl-4 ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: "FARM"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-gold-light h-[2px] w-8 rounded-lg mb-4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: "SACRED PETS"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inset-0 absolute bg-outline-gold -z-10"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                        title: "TRIBE CHALlENGE",
                        href: "#TRIBE-CHALlenge",
                        current: router.asPath == "/TRIBE-CHALlenge" ? true : false
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Profile, {
                className: ""
            })
        ]
    }));
}
function HeaderMobile() {
    let { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const openModal = ()=>{
        setIsOpen(true);
    };
    const closeModal = ()=>{
        setIsOpen(false);
    };
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "xl:hidden w-full flex justify-end ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between w-full items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                className: "w-28 ",
                                src: logo,
                                alt: "logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-right text-sm hidden md:inline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gold-gradient font-bold ",
                                        children: "0.682 EVM"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-disable",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mr-1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: '/assets/capsules/png/icon/copy.png',
                                                    alt: "copy",
                                                    width: "12px",
                                                    height: "12px"
                                                })
                                            }),
                                            "0x1231...daw3HEJ"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: openModal,
                                className: "mr-2 border p-1 border-[#5c503a] rounded-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                    className: "w-8 ml-auto ",
                                    src: hamburger,
                                    alt: "logo"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition, {
                appear: true,
                show: isOpen,
                as: external_react_.Fragment,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog, {
                    as: "div",
                    className: "fixed inset-0 z-[60] overflow-y-aut",
                    onClose: closeModal,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "min-h-screen text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Child, {
                                as: external_react_.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog.Overlay, {
                                    className: "fixed inset-0 bg-black/60"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Child, {
                                as: external_react_.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 translate-x-full",
                                enterTo: "opacity-100 translate-x-0",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 translate-x-0",
                                leaveTo: "opacity-0 translate-x-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sm:ml-auto sm:w-100 h-screen relative w-full overflow-hidden text-left align-middle transition-all transform bg-[#0E0E16] shadow-xl ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute inset-0 -z-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                layout: "fill",
                                                objectFit: "cover",
                                                className: "h-screen",
                                                src: starbg,
                                                alt: "bgstart"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "px-4 py-4 flex items-center bg-[#0E0E16] border-b-[1px] border-[#5c503a]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                                                className: "w-28 ",
                                                                src: logo,
                                                                alt: "logo"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-auto flex items-center gap-3",
                                                    onClick: closeModal,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "text-right text-sm hidden md:inline",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-gold-gradient font-bold ",
                                                                    children: "0.682 EVM"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "text-disable",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "mr-1",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                                src: '/assets/capsules/png/icon/copy.png',
                                                                                alt: "copy",
                                                                                width: "12px",
                                                                                height: "12px"
                                                                            })
                                                                        }),
                                                                        "0x1231...daw3HEJ"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                                            className: "w-8 ",
                                                            src: x/* default */.Z,
                                                            alt: "x"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-12 mx-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(NLink, {
                                                    title: "HOME",
                                                    href: "/",
                                                    current: router.asPath == 'currentUrl' ? true : false
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure, {
                                                    children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure.Button, {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NLink, {
                                                                        title: "ABOUT GAME",
                                                                        current: router.asPath == 'currentUrl' ? true : false
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Disclosure.Panel, {
                                                                    className: "ml-12 pb-8 font-source text-white uppercase",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(SubLink, {
                                                                            title: "Features"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(SubLink, {
                                                                            title: "Tribes"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(SubLink, {
                                                                            title: "Tokens"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(NLink, {
                                                    title: "CAPSULES",
                                                    href: "/capsules",
                                                    current: router.asPath == '/capsules' ? true : false
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(NLink, {
                                                    title: "ROADMAP",
                                                    href: "/#RoadMap",
                                                    current: router.asPath == 'currentUrl' ? true : false
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CLink, {
                                                    title: "PARTNERSHIP"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CLink, {
                                                    title: "NEWS"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(cardUser, {
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
    function NLink({ title , href , current  }) {
        if (href) {
            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    var ref;
                    closeModal();
                    (ref = document.getElementById(href)) === null || ref === void 0 ? void 0 : ref.scrollIntoView();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: href,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `block font-source m-6 mt-0 text-white ${current ? "border-l-2 border-[#E2B15B] p-2 bg-gold-gradient_mb" : ''}`,
                        children: title
                    })
                })
            }));
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "block font-source m-6 mt-0 text-white",
            children: title
        }));
    }
    function CLink({ title  }) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "block font-source m-6 mt-0 text-disable",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-[10px] text-gold font-source mb-5",
                    children: "COMING SOON"
                })
            ]
        }));
    }
    function SubLink({ title  }) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "pb-4",
            onClick: ()=>{
                var ref;
                closeModal();
                (ref = document.getElementById(`/#${title}`)) === null || ref === void 0 ? void 0 : ref.scrollIntoView();
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/#${title}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "block ",
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-[2px] w-8 rounded-full bg-gold-light scale-x-100 transition-transform origin-top-left"
                })
            ]
        }));
    }
}

;// CONCATENATED MODULE: ./components/layout.tsx




const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative bg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `p-0 text-white `,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: props.children
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-16"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
            })
        ]
    }));
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(global/* GlobalProvider */.R, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_namespaceObject.ToastContainer, {
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,848,156], () => (__webpack_exec__(6696)));
module.exports = __webpack_exports__;

})();