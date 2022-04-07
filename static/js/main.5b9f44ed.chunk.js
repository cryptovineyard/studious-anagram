(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
    [0], {
        389: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        407: function(e, t, n) {},
        421: function(e, t) {},
        424: function(e, t) {},
        426: function(e, t) {},
        430: function(e, t) {},
        431: function(e, t) {},
        456: function(e, t) {},
        458: function(e, t) {},
        469: function(e, t) {},
        471: function(e, t) {},
        482: function(e, t) {},
        484: function(e, t) {},
        500: function(e, t) {},
        533: function(e, t) {},
        534: function(e, t) {},
        602: function(e, t) {},
        607: function(e, t) {},
        609: function(e, t) {},
        616: function(e, t) {},
        617: function(e, t) {},
        641: function(e, t) {},
        648: function(e, t) {},
        696: function(e, t) {},
        842: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                i = n(118),
                c = n.n(i),
                o = n(883),
                s = (n(407), n(884)),
                u = n(228),
                d = n(15),
                l = n(874),
                b = n(886),
                p = n(2),
                h = n.n(p),
                j = n(7),
                A = n(26),
                f = n(378),
                g = n(62),
                m = n.n(g),
                x = n(381),
                O = n.n(x),
                y = n(391),
                v = n(878),
                w = n(877),
                B = n(1),
                S = Object(a.createContext)({
                    address: null,
                    connect: function() {
                        return null
                    },
                    loading: !1,
                    disconnect: function() {
                        return null
                    },
                    chainId: null,
                    setSnackbar: function() {
                        return null
                    }
                }),
                C = {
                    walletconnect: {
                        package: y.a,
                        options: {
                            rpc: {
                                137: "https://polygon-rpc.com/",
                                97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
                            },
                            network: "polygon"
                        }
                    }
                },
                E = Object(a.forwardRef)((function(e, t) {
                    return Object(B.jsx)(w.a, Object(f.a)({
                        elevation: 6,
                        ref: t,
                        variant: "filled"
                    }, e))
                })),
                k = new O.a({
                    cacheProvider: !0,
                    providerOptions: C
                }),
                W = function(e) {
                    var t = e.children,
                        n = Object(a.useState)(),
                        r = Object(A.a)(n, 2),
                        i = r[0],
                        c = r[1],
                        o = Object(a.useState)(!1),
                        s = Object(A.a)(o, 2),
                        u = s[0],
                        d = s[1],
                        l = Object(a.useState)(null),
                        b = Object(A.a)(l, 2),
                        p = b[0],
                        f = b[1],
                        g = Object(a.useState)(null),
                        x = Object(A.a)(g, 2),
                        O = x[0],
                        y = x[1],
                        w = function(e) {
                            e.on("disconnect", (function(e) {
                                console.log(e), y(null), c(null)
                            })), e.on("accountsChanged", (function(e) {
                                c(e[0]), f({
                                    type: "info",
                                    message: "Account Changed"
                                })
                            })), e.on("chainChanged", (function(e) {
                                y(e)
                            }))
                        },
                        C = function() {
                            var e = Object(j.a)(h.a.mark((function e() {
                                var t, n, a, r;
                                return h.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!i) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (d(!0), e.prev = 3, (t = new m.a(m.a.givenProvider)).currentProvider) {
                                                e.next = 8;
                                                break
                                            }
                                            return f({
                                                type: "error",
                                                message: '"No provider was found"'
                                            }), e.abrupt("return");
                                        case 8:
                                            return e.next = 10, k.connect();
                                        case 10:
                                            return n = e.sent, t = new m.a(n), w(n), e.next = 15, t.eth.getAccounts();
                                        case 15:
                                            return a = e.sent, e.next = 18, t.eth.getChainId();
                                        case 18:
                                            r = e.sent, c(a[0]), y(r), e.next = 27;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(3), console.error(e.t0), f({
                                                type: "error",
                                                message: "Failed to connect"
                                            });
                                        case 27:
                                            d(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 23]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        W = function(e, t) {
                            "clickaway" !== t && f(null)
                        };
                    return Object(a.useEffect)((function() {
                        k.cachedProvider && C()
                    }), []), Object(B.jsxs)(S.Provider, {
                        value: {
                            address: i,
                            loading: u,
                            connect: C,
                            disconnect: function() {
                                k.clearCachedProvider(), c(null), y(null)
                            },
                            chainId: O,
                            setSnackbar: f
                        },
                        children: [t, p && Object(B.jsx)(v.a, {
                            open: !!p,
                            autoHideDuration: 4e3,
                            onClose: W,
                            children: Object(B.jsx)(E, {
                                onClose: W,
                                severity: null === p || void 0 === p ? void 0 : p.type,
                                sx: {
                                    width: "100%"
                                },
                                children: null === p || void 0 === p ? void 0 : p.message
                            })
                        })]
                    })
                },
                T = function() {
                    return Object(a.useContext)(S)
                },
                M = Object(l.a)(b.a)((function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        position: "fixed",
                        right: 48,
                        top: 48
                    }, t.breakpoints.down("md"), {
                        display: "none"
                    })
                })),
                R = Object(l.a)(b.a)((function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        display: "none",
                        marginTop: -24,
                        marginBottom: 48,
                        width: "95%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }, t.breakpoints.down("md"), {
                        display: "block"
                    })
                }));

            function U(e) {
                var t = e.responsive,
                    n = void 0 === t || t,
                    a = T(),
                    r = a.address,
                    i = a.loading,
                    c = a.connect,
                    o = a.disconnect;
                return n ? Object(B.jsx)(M, {
                    color: "secondary",
                    variant: "contained",
                    disabled: i,
                    onClick: function() {
                        return r ? o() : c()
                    },
                    children: r ? "Disconnect" : "Connect"
                }) : Object(B.jsx)(R, {
                    color: "secondary",
                    variant: "contained",
                    disabled: i,
                    onClick: function() {
                        return r ? o() : c()
                    },
                    children: r ? "Disconnect" : "Connect"
                })
            }
            var V = n(887),
                Z = n.p + "static/media/FullLogo.png",
                F = Object(l.a)("div")((function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        textAlign: "center",
                        paddingBottom: 24
                    }, t.breakpoints.down("md"), {
                        h5: {
                            fontSize: 20,
                            margin: 0
                        }
                    })
                }));

            function Q() {
                return Object(B.jsxs)(F, {
                    children: [Object(B.jsx)("img", {
                        src: Z,
                        alt: "",
                        width: "100%",
                        style: {
                            marginTop: -33
                        } //Hire WineMakers & Receive
                    }), Object(B.jsx)(U, {
                        responsive: !1
                    }), Object(B.jsx)(V.a, {
                        variant: "h6",
                        marginTop: 0,
                        children: "🏡Welcome to The Matic Vineyard🍇"
                    }),
                    Object(B.jsx)(V.a, {
                        variant: "h6",
                        marginTop: 0,
                        children: "Hire WineMakers🧑‍🌾 & Harvest"
                    }),
                        Object(B.jsx)(V.a, {
                        variant: "h6",
                        marginTop: 0,
                        children: "🍷8% Daily"
                    }),
                        Object(B.jsx)(V.a, {
                        variant: "h6",
                        marginTop: 0,
                        children: "Withdraw Daily⏳    "
                    }),
                        Object(B.jsx)(V.a, {
                        variant: "h6",
                        marginTop: 0,
                        children: "[App Status: OPEN]"
                    }),
                
                
                ]
                })
            }
            var Y = n(890),
                D = n(888),
                G = n(881),
                I = n(889),
                N = n(891),
                H = n(23),
                L = Object(l.a)("input")({
                    fontSize: 24,
                    fontWeight: 500,
                    padding: "12px 90px 12px 16px",
                    textAlign: "right",
                    borderRadius: 0,
                    border: "1px solid #555",
                    background: "white",
                    width: "100%",
                    outline: "none",
                    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                        MozAppearance: "textfield"
                    }
                });

            function P(e) {
                var t = e.value,
                    n = e.max,
                    a = e.onChange,
                    r = void 0 === a ? function() {} : a;
                return Object(B.jsxs)(s.a, {
                    position: "relative",
                    children: [Object(B.jsx)(L, {
                        type: "number",
                        min: 0,
                        max: n,
                        value: t,
                        onChange: function(e) {
                            return r(e.target.value)
                        }
                    }), Object(B.jsx)(V.a, {
                        fontSize: 20,
                        position: "absolute",
                        top: 12,
                        right: 18,
                        fontWeight: 400,
                        color: "black",
                        children: "MATIC"
                    })]
                })
            }
            var z = n(389),
                K = 137,
                q = "0x0a4eef96bdb5f443219a689238d485e2d54a66c4",
                J = "https://polygonscan.com/address/0x0a4eef96bdb5f443219a689238d485e2d54a66c4",
                X = Object(a.createContext)({
                    contract: null,
                    web: null,
                    wrongNetwork: !1,
                    getBnbBalance: function() {
                        return null
                    },
                    fromWei: function() {
                        return null
                    },
                    toWei: function() {
                        return null
                    }
                }),
                _ = function(e) {
                    var t = e.children,
                        n = Object(a.useState)(),
                        r = Object(A.a)(n, 2),
                        i = r[0],
                        c = r[1],
                        o = Object(a.useState)(),
                        s = Object(A.a)(o, 2),
                        u = s[0],
                        d = s[1],
                        l = T(),
                        b = l.chainId,
                        p = l.setSnackbar,
                        h = Object(a.useState)(!1),
                        j = Object(A.a)(h, 2),
                        f = j[0],
                        g = j[1];
                    Object(a.useEffect)((function() {
                        if (b) {
                            if (parseInt(b) !== K) return p({
                                type: "error",
                                message: "Wrong network"
                            }), void g(!0);
                            g(!1);
                            var e = new m.a;
                            e.setProvider(m.a.givenProvider), d(e);
                            var t = new e.eth.Contract(z, q);
                            c(t)
                        }
                    }), [b]);
                    return Object(B.jsx)(X.Provider, {
                        value: {
                            web3: u,
                            contract: i,
                            wrongNetwork: f,
                            getBnbBalance: function(e) {
                                return u.eth.getBalance(e)
                            },
                            fromWei: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
                                return parseFloat(m.a.utils.fromWei(e, t)).toFixed(3)
                            },
                            toWei: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
                                return m.a.utils.toWei(e, t)
                            }
                        },
                        children: t
                    })
                },
                $ = Object(l.a)(D.a)({
                    background: "rgb(251 241 225)",
                    marginBottom: 24
                }),
                ee = Object(l.a)(G.a)((function(e) {
                    var t = e.theme;
                    return Object(d.a)({}, t.breakpoints.down("sm"), {
                        flexDirection: "column",
                        "> div": {
                            marginLeft: 0,
                            marginRight: 0
                        }
                    })
                }));

            function te() {
                var e = Object(a.useContext)(X),
                    t = e.contract,
                    n = e.wrongNetwork,
                    r = e.getBnbBalance,
                    i = e.fromWei,
                    c = e.toWei,
                    o = e.web3,
                    u = T(),
                    d = u.address,
                    l = u.chainId,
                    p = Object(a.useState)(0),
                    f = Object(A.a)(p, 2),
                    g = f[0],
                    x = f[1],
                    O = Object(a.useState)({
                        bnb: 0,
                        beans: 0,
                        rewards: 0
                    }),
                    y = Object(A.a)(O, 2),
                    v = y[0],
                    w = y[1],
                    S = Object(a.useState)(0),
                    C = Object(A.a)(S, 2),
                    E = C[0],
                    k = C[1],
                    W = Object(a.useState)(0),
                    M = Object(A.a)(W, 2),
                    R = (M[0], M[1], Object(a.useState)(!1)),
                    U = Object(A.a)(R, 2),
                    Z = U[0],
                    F = U[1],
                    Q = new URLSearchParams(Object(H.c)().search),
                    D = function() {
                        o && !n ? r(q).then((function(e) {
                            x(i(e))
                        })) : x(0)
                    },
                    L = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            var a, c, s, u, l;
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o && !n && d) {
                                            e.next = 3;
                                            break
                                        }
                                        return w({
                                            bnb: 0,
                                            beans: 0,
                                            rewards: 0
                                        }), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, Promise.all([r(d), t.methods.getMyMiners(d).call().catch((function(e) {
                                            return console.error("myminers", e), 0
                                        })), t.methods.beanRewards(d).call().catch((function(e) {
                                            return console.error("beanrewards", e), 0
                                        }))]);
                                    case 6:
                                        a = e.sent, c = Object(A.a)(a, 3), s = c[0], u = c[1], l = c[2], w({
                                            bnb: i("".concat(s)),
                                            beans: u,
                                            rewards: i("".concat(l))
                                        }), e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(3), console.error(e.t0), w({
                                            bnb: 0,
                                            beans: 0,
                                            rewards: 0
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 14]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(a.useEffect)((function() {
                    D()
                }), [o, l]), Object(a.useEffect)((function() {
                    L()
                }), [d, o, l]);
                var z = function() {
                        return m.a.utils.isAddress(Q.get("ref")) ? Q.get("ref") : "0x0000000000000000000000000000000000000000"
                    },
                    K = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            var n;
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(!0), n = z(), e.prev = 2, e.next = 5, t.methods.buyEggs(n).send({
                                            from: d,
                                            value: c("".concat(E)),
                                            maxPriorityFeePerGas: 100000000000,
                                            maxFeePerGas: 100000000000
                                        });
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                                    case 10:
                                        L(), D(), F(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    J = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            var n;
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(!0), n = z(), e.prev = 2, e.next = 5, t.methods.hatchEggs(n).send({
                                            from: d,
                                            maxPriorityFeePerGas: 100000000000,
                                            maxFeePerGas: 100000000000
                                        });
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                                    case 10:
                                        F(!1);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                   
                    _ = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(!0), e.prev = 1, e.next = 4, t.methods.sellEggs().send({
                                            from: d,
                                            maxPriorityFeePerGas: 100000000000,
                                            maxFeePerGas: 100000000000
                                        });
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                    case 9:
                                        L(), D(), F(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    var myfloat = v.beans;
                    var mybeans = Math.trunc(v.beans/10000000000000)
                    var mytest = (g/10799999999)
                    var finale = Math.round(mytest *100000) / 100000
                return Object(B.jsxs)($, {
                    children: [Z && Object(B.jsx)(I.a, {
                        color: "secondary"
                    }), Object(B.jsxs)(Y.a, {
                        children: [Object(B.jsxs)(G.a, {
                            container: !0,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                            children: [Object(B.jsx)(V.a, {
                                variant: "body1",
                                children: "Contract"
                            }), Object(B.jsxs)(V.a, {
                                variant: "h5",
                                children: [g, " MATIC"]
                            })]
                        }), Object(B.jsxs)(G.a, {
                            container: !0,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                            children: [Object(B.jsx)(V.a, {
                                variant: "body1",
                                children: "Wallet"
                            }), Object(B.jsxs)(V.a, {
                                variant: "h5",
                                children: [v.bnb, " MATIC"]
                            })]
                            
                        }), Object(B.jsxs)(G.a, {
                            container: !0,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                            children: [Object(B.jsx)(V.a, {
                                variant: "body1",
                                children: "Your Workers"
                            }), Object(B.jsxs)(V.a, {
                                variant: "h6",
                                children: [v.beans, " WINEMAKERS"]
                            }),
                        ]
                        }), Object(B.jsxs)(s.a, {
                            paddingTop: 4,
                            paddingBottom: 3,
                            children: [Object(B.jsx)(s.a, {
                                children: Object(B.jsx)(P, {
                                    max: +v.bnb,
                                    value: E,
                                    onChange: function(e) {
                                        return function(e) {
                                            k(e)
                                        }(e)
                                    }
                                })
                            }), Object(B.jsx)(s.a, {
                                marginTop: 3,
                                marginBottom: 3,
                                children: Object(B.jsx)(b.a, {
                                    variant: "contained",
                                    fullWidth: !0,
                                    disabled: n || !d || 0 === +E || Z,
                                    onClick: K,
                                    children: "HIRE WINEMAKERS🧑‍🌾🍇🍷"
                                })
                            }), 
                            
                            Object(B.jsx)(V.a, {}), Object(B.jsxs)(G.a, {
                                container: !0,
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 0,
                                children: [Object(B.jsx)(V.a, {
                                    variant: "body1",
                                    fontWeight: "bolder",
                                    children: "Max Deposit:"
                                }), Object(B.jsxs)(V.a, {
                                    variant: "h5",
                                    fontWeight: "bolder",
                                    children: ["300", " MATIC"]
                                })]
                            }),
                            
                         
                            
                            Object(B.jsx)(N.a, {}), Object(B.jsxs)(G.a, {
                                container: !0,
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 2,
                                children: [Object(B.jsx)(V.a, {
                                    variant: "body1",
                                    fontWeight: "bolder",
                                    children: "Your Rewards"
                                }), Object(B.jsxs)(V.a, {
                                    variant: "h5",
                                    fontWeight: "bolder",
                                    children: [v.rewards, " MATIC"]
                                })]
                            }), 
                            
                            
                                
                                


                            
                                Object(B.jsxs)(ee, {
                                container: !0,
                                children: [Object(B.jsx)(G.a, {
                                    item: !0,
                                    flexGrow: 1,
                                    marginRight: 1,
                                    marginTop: 3,
                                    children: Object(B.jsx)(b.a, {
                                        variant: "contained",
                                        color: "secondary",
                                        fullWidth: !0,
                                        disabled: n || !d || Z,
                                        onClick: J,
                                        children: "FERMENT🧑‍🌾"
                                    })
                                    
                                }),


                                    



                                    
                                
                                    Object(B.jsx)(G.a, {
                                    item: !0,
                                    flexGrow: 1,
                                    marginLeft: 1,
                                    marginTop: 3,
                                    children: Object(B.jsx)(b.a, {
                                        variant: "contained",
                                        color: "secondary",
                                        fullWidth: !0,
                                        disabled: n || !d || Z,
                                        onClick: _,
                                        children: "HARVEST🍇"


                                        

                                            
                                    }),
                                    
                                    
                                    


                                })]
                                
                            })]
                                
                        })]
                    })]
                })
            }
       
                
            var ne = Object(l.a)(D.a)({
                    background: "rgb(255 252 248)",
                    marginBottom: 24
                }),
                ae = [{
                    label: "Daily Return",
                    value: 8
                }, {
                    label: "Total Return",
                    value: "2920"
                }, {
                    label: "Deposit Fee",
                    value: 8
                }, {
                    label: "Insurance Fee",
                    value: 8
                }
            
            
            ];
    
            function re() {
                return Object(B.jsx)(ne, {
                    children: Object(B.jsxs)(Y.a, {
                        children: [Object(B.jsx)(V.a, {
                            variant: "h5",
                            borderBottom: "6px solid",
                            paddingBottom: 1,
                            children: "Statistics"
                        }), Object(B.jsx)(s.a, {
                            paddingTop: 2,
                            children: ae.map((function(e) {
                                return Object(B.jsxs)(G.a, {
                                    container: !0,
                                    justifyContent: "space-between",
                                    children: [Object(B.jsx)(V.a, {
                                        variant: "body1",
                                        gutterBottom: !0,
                                        children: e.label
                                    }), Object(B.jsxs)(V.a, {
                                        gutterBottom: !0,
                                        children: [e.value, "%"]
                                    })]
                                }, e.label)
                            }))
                        })]
                    })
                })
            }
            var ie = Object(l.a)(D.a)({
                    background: "rgb(251 241 225)"
                }),
                ce = Object(l.a)("input")((function(e) {
                    return {
                        fontSize: 10,
                        fontWeight: 300,
                        padding: "10px 12px",
                        borderRadius: 0,
                        border: "1px solid #555",
                        background: "white",
                        width: "100%",
                        outline: "none",
                        color: e.theme.palette.primary.main
                    }
                }));    
                
            
            
            function oe(e) {
                var t = e.address,
                n = "".concat(window.origin, "?ref=").concat(t);
                return Object(B.jsx)(ne, {
                    children: Object(B.jsxs)(Y.a, {
                        style: {
                            paddingLeft: 8,
                            paddingRight: 8
                        },
                        children: [Object(B.jsx)(V.a, {
                            gutterBottom: !0,
                            variant: "h5",
                            borderBottom: "6px solid",
                            textAlign: "center",
                            children: "Referral Link & Tokenomics"
                        }), Object(B.jsx)(ce, {
                            value: t ? n : "",
                            readOnly: !0
                        }), Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "Earn 12% of the MATIC used to hire makers from anyone who uses your referral link!"
                            
                        }), Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "The referall rewards are sent to your pending rewards!"
                            
                        }),       
                            Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "Please note: You can not unstake; only withdraw earnings."
                            
                        }),
                        
                            Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "h5",
                            marginTop: 2,
                            paddingX: 3,
                            children: "Tokenomics:"
                            
                        }),
                            Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "•Rewards can be re-invested & withdrawn daily."
                            
                        }),
                        Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "•To ensure the max rewards (8%) We reccomend the following strategy:"
                            
                        }),
                        Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "•Fermenting🧑‍🌾(Re-hiring) 6 Days/Week and Harvest🍇1 Day/Week•"
                            
                        }),
                        
                            Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "•Every deposit/withdrawal is has a base tax of 8% to ensure contract longevity, along with an insurance fee (listed below)"
                            
                        }),
                           
                            Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "•8% Insurance fee is used to fund the insurance treasury for contract replenishment & buybacks)."
                            
                        }),
                            Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "•80% of the insurance treasury is dedicated to rewarding the last investors if the project slows down. 20% is allocated for contract replenishments"
                            
                        }),
                    
                    
                    ]
                    
                    
                    
                    
                    
                    })


                    
                })
                
            }
            

            

            function se() {
                return Object(B.jsxs)(G.a, {
                    container: !0,
                    justifyContent: "center",
                    spacing: 2,
                    marginTop: 4,
                    children: [Object(B.jsx)(G.a, {
                        item: !0,
                        children: Object(B.jsx)("a", {
                            href: J,
                            target: "__blank",
                            children: Object(B.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADWElEQVRo3u2av3HbMBSHPycunDsXcsWU4gSmJzA9ge0FaHkCyRPEnkDSBOJxActVSjFVylBdOsglOzYq0qUg7FAQSIkU+Cd3/t2pEIgD34cH4AEPhA91S0d1NWzZngP0lOIoFkHSaRBp+A1wCbgFVVdABLwAYSyCVesglu31gQFwB/QrNhMBU2B+iLcqgUiAbxLClBIJNKkCVBrEsr1HYMj2+DelFXAfiyCsBUTOgRng1ASgahKL4MEoiGV7LvBMfV7IUwRc7TPUPu0BMQAWLUBA6v2FZXs7310IkhlObcoh7chCfS6A6AM/gZOWQQC+np6d99fJ8iWvQpFHZrQznPI0sGzvphSInBduA8b5gB2L4OjtB9ySxhSdZnnzZWtoyYrfaWBIxSK4WCfLDaPXyfL36dn5F/QdeQL8WSfLUH2g88iIbg0pVUOdV3Qgd21bukM90s7OB5GTqW/wpREQyl9isN2hWnCs/L82CLAVkS3bGwFjA+33LNtzs/sxdWjdGAKZ6rYVsQgmhtrf0jtIzomuqlZ1GZxRpAWhmbhhSk+qx7Nz5HzPRhJgDrzK/5ekC0S/IQg/FsGjWpgF2deQq1gEkVpo2d6C+r3qxyK41z3YuY1XFOogpH40CWHZ3kCeViuBtCUVwkFZxv8HkIkC0UOzMz8u12ajSoCHWAS+Uv6MJm+QBVm1bXlGIelw2rDJsr0ZmwtKqAN5pSPSpYIkxEApjnQgIWnSrVOSc2KsgVhlg+L7ZC+bEDOgaE+IBfqM5oa96qo1bxBkugPCAX6RnxDciFsqSG6WwqAeSM/pfgHESEL0c6okKJ2+sfzGIvAt2xtT41G3aCsvU1DqyqTTVuZeFxCnHKaECkt5xgu7IACe1AJdQJxQLdseSoBS9xwyrzxm/+S4r7sc0iax5URT870J+khbSRLgG+V2zAnp/NrqqMJsvHwZpGv2CgOSCY5hSYA33cYimOse1HYZqhjfI40FQ6ofwArvS+q81e2RJjOuOTypkXugqgVEzi1XGu8aajaMRXC1q9Kht7ou6WrzdiXdM9kx7OGJSiByuIzYfZduQk+6JEOeSp0QM8ueUyNABFyUgYDu3bNXjlOd+fLh0EBr+lsUl38JO0dTLZGGR8ASg9+ifKhr+gvf9S3/pZ723AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",
                                alt: "",
                                width: 48,
                                height: 48
                            })
                        })
                    }), Object(B.jsx)(G.a, {
                        item: !0,
                        children: Object(B.jsx)("a", {
                            href: "https://discord.gg/3npCecsXSe",
                            target: "__blank",
                            children: Object(B.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRo3u2aP3KbQBSHvyQuPRNUqTScQOQG+ARWLkCsE0Tp0sU6QewTWOYCQSewbmB0AnBJtylUpEuxawVhFnYRCM3EvxmPR+Lt4316+/cBvOm09K5rh2Mv9AEfcDUmGZDkaZScFMjYCx1gClyp/6YSwBpYAXGeRmIQkLEXusAPFbxz4O8hgBhY5GmUHQVEZWCuIPrQAri1zZAViOr/v9D3/66UAbM8jdamDd5bQFwDT0eAQN3jUd3TSEYZGXvhPWDstGMt8zSaNRl9OHEIAP98NHG3YrNqDTL2wjnwfUCIIszzVmwSnYG2a429MAAehyYo6ZNuIa0EUVPssQa2jTIFI8oXdLPW/AQhUDHNqy68yohasdOhI26QV94BVGWkrxW7SWsL21cx7oEUNoDHUgZ8A0Z5Gl0Ct4btpirWnc7KBhy+ATRRDNxVbEF+G7Z3VKxLHchVj8EL4A65Umcam48W/q7qQKY9AKyBhzyNlga2voXfoPhhB6J2tl1J8K/7JMULqm87mqy4Fvdwxl7ov/gvDvYuQDJghpweZxUQN8ip/VrT3gZkz/7sACdFLZHdZ111UWX7Xv1YCRWzk9oS2cpHZv7VGLFRBjzQcJpTWXiZ9xPgUmPvHBBLK5AY+evHdUalLDRBQLuufdEGJAE+mxQHSlkwgQCYtADZyQbEBMBFZiGwhIB2Xeu5DcgUuTVIkGMjLmZHHcJ+lAIyOqYqBYZ2lSqCZIZtfPX3U0EJ5IznluyMIVQm22gXcxEkaeHI13wfW2QC2k/9u5h3C2LHtVi3vDttUNDmJsWYy+eRuCMQH1mX8g3tLwzttLGWQVbmfoxh5ga2bgv/e7FWZUR0COMgJ4XHhgEdWPoV1GVEzfWxqTcLBcBTVXYsx9KLluV1qerMvugBBPTZCSz9COQBbU+6utYN/RchlsiV+St2q/oiT6Ob8pe6lf0W+EK/ta3rFm0yNAWKupKpj6w2npK0JVPt8xHVwGZ17luzukW7thq/FZvkfDRx6eYYfIiWeRrVTkKNz0e2YrMaGMZo82n8DFE9Brs/MsTMsIxk/TA0UDBuzwAZ8jSamDZo7FpFbcUmOx9NHoA/HHgQqtECmYnMptH/+8JABZBDu1c4UMEP+wpHDZjPAC/VvOnU9BdAxzlbow3rDQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",
                                alt: "",
                                width: 48,
                                height: 48
                            })
                        })
                    }), Object(B.jsx)(G.a, {
                        item: !0,
                        children: Object(B.jsx)("a", {
                            href: "https://hazecrypto.net/audit/vineyard",
                            target: "__blank",
                            children: Object(B.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAS9QTFRFAAAAFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeFyFeueiudwAAAGV0Uk5TADBggBCv/+8gn8LFojty38CTSLZAqVkMo8mPdZxwRHjHmneNg17DTDUmPFwsRmRhIZVBZhcocYaeBClrp2m8ebg3fL44UFVSG7MISbGtCYdvaKuCPiQybRWgukuWi4kdUU8PV5gwB6I4AAAC4UlEQVR4nMWWaVsTQQyA0902bVl7cFdEQKVFbhCsRW7wKreIHCqiyP//DWaSuXZpQT/4mA+7k8y8M5NJ5gD4b5IKQpYg9UfN00EGnWQzQfoeIJfP6sYdkaHyubtGCE3vDwoARTtW2HakVEk3KXey3tVtmFJPayIwDXqtqWAHCloReeNEn2fsrzzU5nx7Qnc3EEWPpDTYjnmsK/pZ62MvMkOsDLeeW482j7D2BDF6OjCC+ExpQ8afWGDTJQ8ZpbZdylpFrI0BPLfr5q+1jYdCOhHHxTyBOAkw5eLjiBzGkWlTMYOzAHO2Fl0e5GPIPL6gdlEHFRdwAWDRIXbV0tnbyEus8Sh1io1DssabAOPIK2WU5ak3AJZctV3oTByJyWs1oJOMNuMdCEnDq8+KKeWZamJaXlkEWF2bEW292zVIJVzZ2FRu1Le2qVxR0117k5z621gct2lTvAOXhzLse27zoan10EeWVXkyieCO9mh3L4nsH6jiUiPhLg4rzwQ6VHreIsNcWuUVSyJpjI64+mMMUSE6OEY8pv8nj2iekIHse585F/yJKaRmltBlaVOmdCqrP2uRQCMjeALxSNnAnmGkkcA2YIRbnAHTNrAT6oDaZCSwoQQfGcV5+kYOqeCMj4CNrUxsR00htKHqqHOxYJBZl5aBQSixQPzJ0fEVSe05eIhJftpigmyBk4spX9ETs1uMNrJCviAOntJ/PKRMKEjNuorHZFMCVsUB20lOBjym2VRhmrJHpwh8RVp4ugFq35RWzXrXRngp/+8UCzR9qSy5ZEOR9Sv/UKKj70IKP/awqY/xBh8BP3uxIrEYix99FM7yqpS0E8vbeCila/7ONRIHLC902d0Sv9S+xHLR6Ncr2OKKUcdfWXrcMdckRhKlI7dTbjF4cwXnN/5+2d/lNW5JmGOjiAm54G/Li48umVKyuZFS2zeDu8Tj0v4SB/+pYOXupwKPFHuQ4P0PEpG/fPb8E/kNc/lH/6vwAZUAAAAASUVORK5CYII=",
                                alt: "",
                                width: 48,
                                height: 48
                            })
                        })
                    }), 
                        
                               
                        Object(B.jsx)(G.a, {
                        item: !0,
                        children: Object(B.jsx)("a", {
                            href: "https://twitter.com/VineyardMiner",
                            target: "__blank",
                            children: Object(B.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD0UlEQVRo3u2aMVbjOBjHf7BTbMF761Ru4247zAnGdNMRLuBJTsBwgiEnAE4A+AKEE+DpttvkBPJ0484UKbbbQjKjcaRYsmNIMf/3eM/Ykvz9pE9fPkmG39ovHey6wTBKAyBWf4GhSA4UpciKvQMJo3QCfAQmwNixWqWgnoBFKbLqXUBUz0+BCw/jt0HdA7ddR6oTSBilU+Aas+v01Ry48R0hL5AwSsfAHZAMAKCrAGalyHLXCn94QCTAM/D3wBAgR3p6NDp+WVerf3YGolzpEfjzDSB0fToaHY/X1eqpN4iCuHtjAF2xC8xWEOVOj+8IocMcrKtVbitgnewqvAqGiUxddWoLAIdbKj3uGQTAo+pgNxA1L5KBjCmAGRCVIjsAToEbQ7nKcC9A/n5tyOhaYZQK7L/WeQ/Iy1JkJqMJozRGhvcCeFBGf7W0EzUzgENDg9MtEEUpslNkOuGrmQ0CoBTZshTZqBTZieqsiy1tbQAeuhTStFAvnWF2B5vmpcic4FX28FV1VmEpNlXlzCBqeMfY9aL14CVwjtmXm3KCUO0WpcjOge8ttkysIMDnlvecNV66AKIWQ73XHmGUXmOZ1DZbmyBJS+VYjZoOUylXi5CZq5fRFn1xKBProfhD86FDA3fASfOm6vUr4Er5b+zYXh/FyMDwM/xq2e02VciweK9GYedytKPWvBTZFfzqWoFDxQXShR6GgPCwo9Zf9YXuWrFDxUSNRDEgiIsdG2UPPSoBjNXQD6mzLpV8QUAmbnGHeq3SgsSbgATA80AjM+laUQcpOsBY0+qOuvAsX9UX+mT3AQFDBtpHYZRe4b8/tqov9BFZejays3W8mhu+owFa57+CqA2xwqORZIeu1XU1mm+ANB84agKIMEqvu07+MErv6BapfklGmyCt+0cGBcgk78J3dBTEtEsHoNZGtTaWui3LXJNyZM6TewAEyDk26QgBcFKKbFn/88FQ4AH7KnGJDHnfkPMp77DWSBSET2c1lesQNpAbZAQJDM/GwC0y+/UFmKh2kx4AtebNG7ZdlC+0r9CWyDmVm9xKpTEx8gAoof8ZSq1cbYC0gyhD/mX4hZGvKuTcKJoPtuVaM9w2Ft5SlzaXtm5ir6vVj6PRcUm/yLJL3Zcim9sebt2NX1er5dHo+PsewLQurVvPR/YAxml/wOnE6h1hnDc5fA9DY2SCNx4YoEJO7HvXCs6HofAaAB6A/xju2GEBnPukPNDvg4ExMpWZ7hDg1hegN4gGFCiYM/xHaYnM7RZ9V5s7/ahG+6CmBvpoMPwFmTEv+35/8lv7rP8Bk+NXaD4vbEEAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAEnRFWHRFWElGOk9yaWVudGF0aW9uADGEWOzvAAAAAElFTkSuQmCC",
                                alt: "",
                                width: 48,
                                height: 48
                            })
                        })
                    })]
                })
            }
            var ue = Object(l.a)("div")((function(e) {
                var t = e.theme;
                return Object(d.a)({
                    maxWidth: 400,
                    margin: "0 auto"
                }, t.breakpoints.down("sm"), {
                    maxWidth: "100%"
                })
            }));

            function de() {
                var e = T().address;
                return Object(B.jsxs)(ue, {
                    children: [Object(B.jsx)(U, {}), Object(B.jsx)(Q, {}), Object(B.jsx)(te, {}), Object(B.jsx)(re, {}), Object(B.jsx)(oe, {
                        address: e
                    }), Object(B.jsx)(se, {})]
                })
            }
            var le = function() {
                    return Object(B.jsx)(u.a, {
                        children: Object(B.jsx)(s.a, {
                            paddingY: 6,
                            paddingX: 2,
                            children: Object(B.jsx)(de, {})
                        })
                    })
                },
                be = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 892)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            r = t.getFCP,
                            i = t.getLCP,
                            c = t.getTTFB;
                        n(e), a(e), r(e), i(e), c(e)
                    }))
                },
                pe = n(390),
                he = n(882),
                je = Object(pe.a)({
                    palette: {
                        primary: {
                            main: "#17215E"
                        },
                        secondary: {
                            main: "#f4b52d"
                        },
                        text: {
                            primary: "#17215E"
                        }
                    },
                    typography: {
                        fontFamily: "Montserrat",
                        body1: {
                            fontSize: 20
                        },
                        body2: {
                            fontSize: 16
                        },
                        allVariants: {
                            color: "#17215E"
                        },
                        h4: {
                            fontWeight: 600,
                            fontSize: 32
                        },
                        h5: {
                            fontSize: 24,
                            fontWeight: 500
                        }
                    },
                    components: {
                        MuiCard: {
                            styleOverrides: {
                                root: {
                                    boxShadow: "6px 6px 20px 6px #00000096",
                                    borderRadius: 20
                                }
                            }
                        },
                        MuiCardContent: {
                            styleOverrides: {
                                root: {
                                    padding: "12px 24px"
                                }
                            }
                        },
                        MuiButton: {
                            styleOverrides: {
                                root: {
                                    borderRadius: 8,
                                    fontWeight: 400,
                                    fontSize: "1.2rem",
                                    padding: "10px",
                                    minWidth: 138
                                },
                                contained: {
                                    boxShadow: "6px 6px 20px 6px #00000096"
                                },
                                containedSecondary: {
                                    color: "#17215E"
                                }
                            }
                        }
                    }
                });

            function Ae(e) {
                var t = e.children;
                return Object(B.jsx)(he.a, {
                    theme: je,
                    children: t
                })
            }
            c.a.render(Object(B.jsxs)(r.a.StrictMode, {
                children: [Object(B.jsx)(o.a, {}), Object(B.jsx)(Ae, {
                    children: Object(B.jsx)(W, {
                        children: Object(B.jsx)(_, {
                            children: Object(B.jsx)(le, {})
                        })
                    })
                })]
            }), document.getElementById("root")), be()
        }
    },
    [
        [842, 1, 2]
    ]
]);
//# sourceMappingURL=main.5b9f44ed.chunk.js.map
