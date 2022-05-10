"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 968:
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
var global = __webpack_require__(719);
;// CONCATENATED MODULE: external "react-toastify"
const external_react_toastify_namespaceObject = require("react-toastify");
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(819);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/LinkNewTab.tsx

function LinkNewTab({ children , href  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        target: "_blank",
        rel: "noreferrer",
        children: children
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/footer/index.tsx


// import left from '../../assets/footer/left.png'
// import right from '../../assets/footer/right.png'
// import Logo from '../../assets/logo.png'

// import Telegram from '../../assets/socials/telegram.svg'
// import Discord from '../../assets/socials/discord.svg'
// import Facebook from '../../assets/socials/facebook.svg'
// import Twitter from '../../assets/socials/twitter.svg'
// import Youtube from '../../assets/socials/youtube.svg'

const Footer = ({ className  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: 'relative z-0 ' + className,
        style: {
            background: 'linear-gradient(180deg, #03091A 0%, #03091A 0.01%, #000000 100%)'
        },
        children: [
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
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-4 grid grid-cols-3 gap-y-4"
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

// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(505);
// EXTERNAL MODULE: ./components/button/goldButton.tsx
var goldButton = __webpack_require__(722);
;// CONCATENATED MODULE: ./components/header/Profile.tsx

// import Avatar from '../../assets/header/Avatar.png'
// import Wallet from '../../assets/header/wallet.svg'
// import Copy from '../../assets/header/copy.svg'



function Profile(props) {
    const { isConnected , setIsConnected  } = (0,external_react_.useContext)(global/* GlobalContext */.k);
    return isConnected ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: 'flex justify-center' + props.className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-end mr-3 font-source",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "font-semibold text-lg text-gold-gradient",
                    children: "0.682 EVM"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex text-xs text-[#C2C2C2]",
                    onClick: ()=>setIsConnected(false)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "0x1231...daw3HEJ"
                    })
                })
            ]
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-56",
        children: /*#__PURE__*/ jsx_runtime_.jsx(goldButton/* GoldButton */.g, {
            className: "hover:cursor-pointer text-sm",
            onClick: ()=>setIsConnected(true)
            ,
            children: "WALLET"
        })
    });
};

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/header/index.tsx




// import MarketplaceSmall from '../../assets/marketsmall.svg'



const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "relative mx-auto w-full z-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-4 md:px-10 py-5 flex items-center md:max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
    console.log(router.asPath);
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "xl:hidden w-full flex justify-end ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: openModal,
                className: "mr-2"
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
                                    className: "sm:ml-auto sm:w-80 h-screen relative w-full overflow-hidden text-left align-middle transition-all transform bg-[#0E0E16] shadow-xl ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute inset-0 -z-10"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "px-4 pt-2 flex items-center bg-[#0E0E16] border-b-[1px] border-[#5c503a]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "ml-auto",
                                                    onClick: closeModal
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-12 mx-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(NLink, {
                                                    title: "HOME",
                                                    href: "/"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure, {
                                                    children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure.Button, {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NLink, {
                                                                        title: "ABOUT GAME"
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
                                                    title: "ROADMAP",
                                                    href: "/#RoadMap"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CLink, {
                                                    title: "PARTNERSHIP"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CLink, {
                                                    title: "NEWS"
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
    function NLink({ title , href  }) {
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
                        className: "block font-source m-6 mt-0 text-white",
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

/***/ 505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
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
var __webpack_exports__ = __webpack_require__.X(0, [190,848,89], () => (__webpack_exec__(968)));
module.exports = __webpack_exports__;

})();