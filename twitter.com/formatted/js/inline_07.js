WATCH('boot', function() {
    using.cssPath = 'http://a3.twimg.com/a/1313600695/';
    using.path = 'http://a1.twimg.com/a/1313600695/phoenix/js';
    using.autoLoad = false;


    provide('boot/bootstrap_data', function(exports) {
        exports({
            "currentUser": {
                "memberships_path": "\/jsreaders\/lists\/memberships",
                "rgba_tweet_border_color": "rgba(0,132,180,0.15)",
                "linkified_status": "",
                "rgba_sidebar_color": "rgba(221,238,246,0.9)",
                "user_followers_path": "\/jsreaders\/followers",
                "screen_name_from_server": "jsreaders",
                "profile_image_url_from_server": "http:\/\/a2.twimg.com\/sticky\/default_profile_images\/default_profile_3_normal.png",
                "rgba_newtweets_border_color": "rgba(0,132,180,0.25)",
                "rgba_tweet_background_color": "rgba(0,132,180,0.1)",
                "subscriptions_path": "\/jsreaders\/lists\/subscriptions",
                "user_favorites_path": "\/jsreaders\/favorites",
                "profile_path": "\/jsreaders",
                "id": 357503058,
                "rgba_newtweets_background_color": "rgba(0,132,180,0.2)",
                "lists_path": "\/jsreaders\/lists",
                "rgba_text_color": "rgba(51,51,51,0.6)",
                "user_following_path": "\/jsreaders\/following",
                "latest_timestamp": "",
                "account_profile_image_path": "\/account\/profile_image\/jsreaders",
                "bigger_profile_image_url": "http:\/\/a2.twimg.com\/sticky\/default_profile_images\/default_profile_3.png"
            },
            "twttr": {
                "languages": [{
                    "localized_name": "\u30a4\u30bf\u30ea\u30a2\u8a9e",
                    "name": "Italiano",
                    "name_en": "Italian",
                    "code": "it",
                    "current": false,
                    "css_classes": "western it"
                }, {
                    "localized_name": "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u8a9e",
                    "name": "Bahasa Indonesia",
                    "name_en": "Indonesian",
                    "code": "id",
                    "current": false,
                    "css_classes": "western id"
                }, {
                    "localized_name": "\u30aa\u30e9\u30f3\u30c0\u8a9e",
                    "name": "Nederlands",
                    "name_en": "Dutch",
                    "code": "nl",
                    "current": false,
                    "css_classes": "western nl"
                }, {
                    "localized_name": "\u30b9\u30da\u30a4\u30f3\u8a9e",
                    "name": "Espa\u00f1ol",
                    "name_en": "Spanish",
                    "code": "es",
                    "current": false,
                    "css_classes": "western es"
                }, {
                    "localized_name": "\u30c8\u30eb\u30b3\u8a9e",
                    "name": "T\u00fcrk\u00e7e",
                    "name_en": "Turkish",
                    "code": "tr",
                    "current": false,
                    "css_classes": "western tr"
                }, {
                    "localized_name": "\u30c9\u30a4\u30c4\u8a9e",
                    "name": "Deutsch",
                    "name_en": "German",
                    "code": "de",
                    "current": false,
                    "css_classes": "western de"
                }, {
                    "localized_name": "\u30d5\u30e9\u30f3\u30b9\u8a9e",
                    "name": "fran\u00e7ais",
                    "name_en": "French",
                    "code": "fr",
                    "current": false,
                    "css_classes": "western fr"
                }, {
                    "localized_name": "\u30dd\u30eb\u30c8\u30ac\u30eb\u8a9e",
                    "name": "Portugu\u00eas",
                    "name_en": "Portuguese",
                    "code": "pt",
                    "current": false,
                    "css_classes": "western pt"
                }, {
                    "localized_name": "\u30ed\u30b7\u30a2\u8a9e",
                    "name": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    "name_en": "Russian",
                    "code": "ru",
                    "current": false,
                    "css_classes": "western ru"
                }, {
                    "localized_name": "\u65e5\u672c\u8a9e",
                    "name": "\u65e5\u672c\u8a9e",
                    "name_en": "Japanese",
                    "code": "ja",
                    "current": true,
                    "css_classes": "asian ja"
                }, {
                    "localized_name": "\u82f1\u8a9e",
                    "name": "English",
                    "name_en": "English",
                    "code": "en",
                    "current": false,
                    "css_classes": null
                }, {
                    "localized_name": "\u97d3\u56fd\u8a9e",
                    "name": "\ud55c\uad6d\uc5b4",
                    "name_en": "Korean",
                    "code": "ko",
                    "current": false,
                    "css_classes": "asian ko"
                }],
                "currentUserScreenName": "jsreaders",
                "isPreflight": false,
                "cdnBase": {
                    "bundled": {
                        "ssl_akamai": ["https:\/\/twimg0-a.akamaihd.net\/b"],
                        "http": ["http:\/\/a0.twimg.com\/b", "http:\/\/a1.twimg.com\/b", "http:\/\/a2.twimg.com\/b", "http:\/\/a3.twimg.com\/b"],
                        "ssl": ["https:\/\/si0.twimg.com\/b"]
                    },
                    "unversioned": {
                        "ssl_akamai": ["https:\/\/twimg0-a.akamaihd.net"],
                        "http": ["http:\/\/a0.twimg.com", "http:\/\/a1.twimg.com", "http:\/\/a2.twimg.com", "http:\/\/a3.twimg.com"],
                        "ssl": ["https:\/\/si0.twimg.com"]
                    },
                    "versioned": {
                        "ssl_akamai": ["https:\/\/twimg0-a.akamaihd.net\/a\/1313600695"],
                        "http": ["http:\/\/a0.twimg.com\/a\/1313600695", "http:\/\/a1.twimg.com\/a\/1313600695", "http:\/\/a2.twimg.com\/a\/1313600695", "http:\/\/a3.twimg.com\/a\/1313600695"],
                        "ssl": ["https:\/\/si0.twimg.com\/a\/1313600695"]
                    }
                },
                "payload": {
                    "profiling": false,
                    "conditionalTemplates": {}
                },
                "pageLocale": "ja",
                "globalConfig": {
                    "short_url_length_https": 20,
                    "characters_reserved_per_media": 20,
                    "photo_size_limit": 3145728,
                    "photo_sizes": {
                        "large": {
                            "resize": "fit",
                            "h": 2048,
                            "w": 1024
                        },
                        "medium": {
                            "resize": "fit",
                            "h": 1200,
                            "w": 600
                        },
                        "small": {
                            "resize": "fit",
                            "h": 480,
                            "w": 340
                        },
                        "thumb": {
                            "resize": "crop",
                            "h": 150,
                            "w": 150
                        }
                    },
                    "non_username_paths": ["about", "account", "accounts", "activity", "all", "announcements", "anywhere", "api_rules", "api_terms", "apirules", "apps", "auth", "badges", "blog", "business", "buttons", "contacts", "devices", "direct_messages", "download", "downloads", "edit_announcements", "faq", "favorites", "find_sources", "find_users", "followers", "following", "friend_request", "friendrequest", "friends", "goodies", "help", "home", "im_account", "inbox", "invitations", "invite", "jobs", "list", "login", "logout", "me", "mentions", "messages", "mockview", "newtwitter", "notifications", "nudge", "oauth", "phoenix_search", "positions", "privacy", "public_timeline", "related_tweets", "replies", "retweeted_of_mine", "retweets", "retweets_by_others", "rules", "saved_searches", "search", "sent", "settings", "share", "signup", "signin", "similar_to", "statistics", "terms", "tos", "translate", "trends", "tweetbutton", "twttr", "update_discoverability", "users", "welcome", "who_to_follow", "widgets", "zendesk_auth", "media_signup", "t1_qunit_tests", "phoenix_qunit_tests"],
                    "max_media_per_upload": 1,
                    "short_url_length": 19
                }
            },
            "requestCacheSeedData": [{
                "json": {
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_background_tile": false,
                    "profile_sidebar_fill_color": "DDEEF6",
                    "name": "JavaScript\u3092\u8aad\u3080\u4f1a",
                    "location": null,
                    "profile_image_url": "http:\/\/a2.twimg.com\/sticky\/default_profile_images\/default_profile_3_normal.png",
                    "created_at": "Thu Aug 18 13:30:41 +0000 2011",
                    "profile_link_color": "0084B4",
                    "follow_request_sent": false,
                    "is_translator": false,
                    "id_str": "357503058",
                    "contributors_enabled": false,
                    "url": null,
                    "states": {
                        "pending_email": false,
                        "bouncing_email": false,
                        "detached_email": false,
                        "needs_employee_email_update": false,
                        "suspended": false
                    },
                    "favourites_count": 0,
                    "default_profile": true,
                    "id": 357503058,
                    "profile_image_url_https": "https:\/\/si0.twimg.com\/sticky\/default_profile_images\/default_profile_3_normal.png",
                    "utc_offset": null,
                    "profile_use_background_image": true,
                    "listed_count": 0,
                    "followers_count": 0,
                    "lang": "ja",
                    "profile_text_color": "333333",
                    "protected": false,
                    "notifications": false,
                    "geo_enabled": false,
                    "time_zone": null,
                    "description": null,
                    "verified": false,
                    "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_color": "C0DEED",
                    "default_profile_image": true,
                    "friends_count": 4,
                    "statuses_count": 0,
                    "profile_background_image_url": "http:\/\/a0.twimg.com\/images\/themes\/theme1\/bg.png",
                    "following": false,
                    "show_all_inline_media": false,
                    "screen_name": "jsreaders"
                },
                "options": [{}],
                "api_request_name": "account\/verify_credentials"
            }, {
                "json": [{
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 18 09:17:07 +0000 2011",
                    "id_str": "104119624655843328",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "https:\/\/market.android.com\/details?id=net.shoozhoo.cacoomiru",
                            "url": "http:\/\/t.co\/gGQ4sGK",
                            "indices": [35, 54],
                            "display_url": "market.android.com\/details?id=net\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "Android \u30de\u30fc\u30b1\u30c3\u30c8\u3067 Cacoo Miru \u3092\u898b\u3064\u3051\u307e\u3057\u305f\uff01 http:\/\/t.co\/gGQ4sGK",
                    "contributors": null,
                    "id": 104119624655843328,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 2,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "7dc5ff",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "7dc5ff",
                        "name": "Cacoo",
                        "location": "",
                        "profile_image_url": "http:\/\/a3.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "created_at": "Thu Oct 08 05:28:01 +0000 2009",
                        "follow_request_sent": false,
                        "profile_link_color": "106bcd",
                        "is_translator": false,
                        "id_str": "80774303",
                        "url": "http:\/\/cacoo.com\/",
                        "favourites_count": 1,
                        "default_profile": false,
                        "contributors_enabled": false,
                        "id": 80774303,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 209,
                        "followers_count": 2009,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "geo_enabled": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "description": "Cacoo\u306e\u66f4\u65b0\u60c5\u5831\u3092\u304a\u5c4a\u3051\u307e\u3059\u3002Cacoo(\u30ab\u30af\u30fc)\u306fWeb\u4e0a\u3067\u7c21\u5358\u306b\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3084\u30ef\u30a4\u30a2\u30fc\u30d5\u30ec\u30fc\u30e0\u3001UML\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u306a\u3069\u306e\u56f3\u5f62\u304c\u4f5c\u6210\u3067\u304d\u308b\u30c9\u30ed\u30fc\u30c4\u30fc\u30eb\u3067\u3059\u3002",
                        "verified": false,
                        "profile_background_color": "106bcd",
                        "friends_count": 2200,
                        "default_profile_image": false,
                        "profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "statuses_count": 878,
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "cacooapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 18 09:15:47 +0000 2011",
                    "id_str": "104119288004214784",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/d.hatena.ne.jp\/ikikko\/20110817\/1313592695",
                            "url": "http:\/\/t.co\/agDZXkj",
                            "indices": [81, 100],
                            "display_url": "d.hatena.ne.jp\/ikikko\/2011081\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "ikikko",
                            "id_str": "7612772",
                            "id": 7612772,
                            "indices": [41, 48],
                            "screen_name": "ikikko"
                        }, {
                            "name": "ikikko",
                            "id_str": "7612772",
                            "id": 7612772,
                            "indices": [72, 79],
                            "screen_name": "ikikko"
                        }]
                    },
                    "text": "Jenkins Backlog\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30ea\u30ea\u30fc\u30b9\u3057\u307e\u3057\u305f\uff08\u30e6\u30fc\u30b6\u8a8d\u8a3c\u5bfe\u5fdc\uff09 - @ikikko \u306e\u306f\u3066\u306a\u30c0\u30a4\u30a2\u30ea\u30fc (id:ikikko \/ @ikikko) http:\/\/t.co\/agDZXkj",
                    "contributors": null,
                    "id": 104119288004214784,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 2,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "BDDCAD",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "DDFFCC",
                        "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                        "location": "",
                        "profile_image_url": "http:\/\/a1.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "created_at": "Fri Jan 16 11:36:53 +0000 2009",
                        "profile_link_color": "0084B4",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "19062950",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp",
                        "favourites_count": 10,
                        "default_profile": false,
                        "id": 19062950,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 60,
                        "followers_count": 623,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7ba1\u7406\u30c4\u30fc\u30ebBacklog\u306e\u516c\u5f0fTwitter\u3067\u3059\u3002\u8981\u671b\u3001\u3054\u610f\u898b\u3001\u8cea\u554f\u306f@backlogapp\u307e\u3067\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "profile_background_color": "94c500",
                        "default_profile_image": false,
                        "friends_count": 634,
                        "statuses_count": 494,
                        "profile_background_image_url": "http:\/\/a3.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "backlogapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 18 06:51:34 +0000 2011",
                    "id_str": "104082995689963520",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/www.backlog.jp\/blog\/2011\/08\/backlog-8.html",
                            "url": "http:\/\/t.co\/FEG44m9",
                            "indices": [56, 75],
                            "display_url": "backlog.jp\/blog\/2011\/08\/b\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                            "id_str": "19062950",
                            "id": 19062950,
                            "indices": [3, 14],
                            "screen_name": "backlogapp"
                        }, {
                            "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                            "id_str": "19062950",
                            "id": 19062950,
                            "indices": [80, 91],
                            "screen_name": "backlogapp"
                        }]
                    },
                    "text": "RT @backlogapp: \u3044\u308d\u3093\u306a\u4ed5\u4e8b\u3084\u30c1\u30fc\u30e0\u3067\u4f7f\u3063\u3066\u3082\u3089\u3044\u305f\u3044Backlog | Backlog\u30d6\u30ed\u30b0 http:\/\/t.co\/FEG44m9 via @backlogapp",
                    "contributors": null,
                    "id": 104082995689963520,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "is_translator": false,
                        "profile_link_color": "D02B55",
                        "id_str": "5384612",
                        "follow_request_sent": false,
                        "default_profile": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "contributors_enabled": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "geo_enabled": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "statuses_count": 1094,
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 18 06:31:01 +0000 2011",
                    "id_str": "104077823446233088",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/www.backlog.jp\/blog\/2011\/08\/backlog-8.html",
                            "url": "http:\/\/t.co\/8BzEf1y",
                            "indices": [40, 59],
                            "display_url": "backlog.jp\/blog\/2011\/08\/b\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                            "id_str": "19062950",
                            "id": 19062950,
                            "indices": [64, 75],
                            "screen_name": "backlogapp"
                        }]
                    },
                    "text": "\u3044\u308d\u3093\u306a\u4ed5\u4e8b\u3084\u30c1\u30fc\u30e0\u3067\u4f7f\u3063\u3066\u3082\u3089\u3044\u305f\u3044Backlog | Backlog\u30d6\u30ed\u30b0 http:\/\/t.co\/8BzEf1y via @backlogapp",
                    "contributors": null,
                    "id": 104077823446233088,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 2,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "BDDCAD",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "DDFFCC",
                        "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                        "location": "",
                        "profile_image_url": "http:\/\/a1.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "created_at": "Fri Jan 16 11:36:53 +0000 2009",
                        "profile_link_color": "0084B4",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "19062950",
                        "url": "http:\/\/www.backlog.jp",
                        "contributors_enabled": false,
                        "favourites_count": 10,
                        "default_profile": false,
                        "id": 19062950,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 60,
                        "followers_count": 623,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "geo_enabled": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "description": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7ba1\u7406\u30c4\u30fc\u30ebBacklog\u306e\u516c\u5f0fTwitter\u3067\u3059\u3002\u8981\u671b\u3001\u3054\u610f\u898b\u3001\u8cea\u554f\u306f@backlogapp\u307e\u3067\u3002",
                        "verified": false,
                        "profile_background_color": "94c500",
                        "friends_count": 634,
                        "default_profile_image": false,
                        "profile_background_image_url": "http:\/\/a3.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "statuses_count": 494,
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "backlogapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 18 01:45:58 +0000 2011",
                    "id_str": "104006090215268352",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "JavaScript\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u52c9\u5f37\u4f1a\u3092\u3084\u308d\u3046\u304b\u3068\u601d\u3046\u3093\u3067\u3059\u3051\u3069\u8208\u5473\u3042\u308b\u65b9\u3044\u307e\u3059\u304b\uff1fTwitter\u306eiPad\u7248\u3042\u305f\u308a\u3092\u6700\u521d\u306f\u8aad\u3082\u3046\u304b\u3068\u3002",
                    "contributors": null,
                    "id": 104006090215268352,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 7,
                    "geo": null,
                    "retweeted": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "5384612",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1094,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 18 01:27:21 +0000 2011",
                    "id_str": "104001401469943808",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/blog.cacoo.com\/ja\/2011\/08\/18\/interview-with-ben-in-london\/",
                            "url": "http:\/\/t.co\/MLKwY1A",
                            "indices": [42, 61],
                            "display_url": "blog.cacoo.com\/ja\/2011\/08\/18\/\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "Interview with Ben in London | Cacoo Blog http:\/\/t.co\/MLKwY1A",
                    "contributors": null,
                    "id": 104001401469943808,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 1,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "7dc5ff",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "7dc5ff",
                        "name": "Cacoo",
                        "location": "",
                        "profile_image_url": "http:\/\/a3.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "created_at": "Thu Oct 08 05:28:01 +0000 2009",
                        "is_translator": false,
                        "profile_link_color": "106bcd",
                        "id_str": "80774303",
                        "follow_request_sent": false,
                        "url": "http:\/\/cacoo.com\/",
                        "default_profile": false,
                        "favourites_count": 1,
                        "contributors_enabled": false,
                        "id": 80774303,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 209,
                        "followers_count": 2008,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "geo_enabled": false,
                        "description": "Cacoo\u306e\u66f4\u65b0\u60c5\u5831\u3092\u304a\u5c4a\u3051\u307e\u3059\u3002Cacoo(\u30ab\u30af\u30fc)\u306fWeb\u4e0a\u3067\u7c21\u5358\u306b\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3084\u30ef\u30a4\u30a2\u30fc\u30d5\u30ec\u30fc\u30e0\u3001UML\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u306a\u3069\u306e\u56f3\u5f62\u304c\u4f5c\u6210\u3067\u304d\u308b\u30c9\u30ed\u30fc\u30c4\u30fc\u30eb\u3067\u3059\u3002",
                        "verified": false,
                        "profile_background_color": "106bcd",
                        "friends_count": 2200,
                        "statuses_count": 878,
                        "default_profile_image": false,
                        "profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "cacooapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Wed Aug 17 12:59:29 +0000 2011",
                    "id_str": "103813198372806656",
                    "entities": {
                        "urls": [],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "\u307f\u306d\u305b\u3044\u3069\u3046",
                            "id_str": "85765650",
                            "id": 85765650,
                            "indices": [3, 12],
                            "screen_name": "thirdani"
                        }]
                    },
                    "in_reply_to_user_id_str": null,
                    "text": "RT @thirdani: \u30df\u30e5\u30fc\u30b8\u30c3\u30af\u30b7\u30c6\u30a3\u5929\u795e\u306b\u30dd\u30cc\u30ed\u30c3\u30af\u51fa\u6f14\u6c7a\u5b9a\uff01\u300210\/1(\u571f) 12:00\uff5e \u5ca9\u7530\u5c4b\u672c\u9928\u524d\u30b9\u30c6\u30fc\u30b8\u3067\u3059\u3002\u898b\u306b\u6765\u3066\u30ad\u30c6\uff01\uff01\u76db\u308a\u4e0a\u304c\u3063\u3066\u30ad\u30bf\u30fc\uff01",
                    "contributors": null,
                    "id": 103813198372806656,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "in_reply_to_user_id": null,
                    "in_reply_to_screen_name": null,
                    "source": "\u003Ca href=\"http:\/\/www.hootsuite.com\" rel=\"nofollow\"\u003EHootSuite\u003C\/a\u003E",
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "id_str": "5384612",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "favourites_count": 4,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "contributors_enabled": false,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "listed_count": 102,
                        "profile_use_background_image": true,
                        "followers_count": 1353,
                        "profile_text_color": "3E4415",
                        "lang": "en",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "verified": false,
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "profile_background_color": "352726",
                        "time_zone": "Tokyo",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "statuses_count": 1094,
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 11 03:50:47 +0000 2011",
                    "id_str": "101500785518579713",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "\u672c\u65e512:35\u304b\u3089\u7d0410\u5206\u7a0b\u5ea6\u3001Cacoo\u306e\u30b5\u30fc\u30d0\u304c\u4e0d\u5b89\u5b9a\u306a\u72b6\u614b\u306b\u306a\u308a\u3001\u30a2\u30af\u30bb\u30b9\u3057\u3065\u3089\u304f\u306a\u3063\u3066\u3044\u307e\u3057\u305f\u3002\u3054\u8ff7\u60d1\u304a\u304b\u3051\u3057\u3066\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u73fe\u5728\u306f\u5fa9\u65e7\u3057\u3066\u3044\u307e\u3059\u3002",
                    "contributors": null,
                    "id": 101500785518579713,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.tweetdeck.com\" rel=\"nofollow\"\u003ETweetDeck\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "7dc5ff",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "7dc5ff",
                        "name": "Cacoo",
                        "location": "",
                        "profile_image_url": "http:\/\/a3.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "created_at": "Thu Oct 08 05:28:01 +0000 2009",
                        "profile_link_color": "106bcd",
                        "follow_request_sent": false,
                        "id_str": "80774303",
                        "is_translator": false,
                        "url": "http:\/\/cacoo.com\/",
                        "favourites_count": 1,
                        "contributors_enabled": false,
                        "default_profile": false,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "id": 80774303,
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 209,
                        "followers_count": 2009,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "description": "Cacoo\u306e\u66f4\u65b0\u60c5\u5831\u3092\u304a\u5c4a\u3051\u307e\u3059\u3002Cacoo(\u30ab\u30af\u30fc)\u306fWeb\u4e0a\u3067\u7c21\u5358\u306b\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3084\u30ef\u30a4\u30a2\u30fc\u30d5\u30ec\u30fc\u30e0\u3001UML\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u306a\u3069\u306e\u56f3\u5f62\u304c\u4f5c\u6210\u3067\u304d\u308b\u30c9\u30ed\u30fc\u30c4\u30fc\u30eb\u3067\u3059\u3002",
                        "verified": false,
                        "profile_background_color": "106bcd",
                        "geo_enabled": false,
                        "friends_count": 2200,
                        "statuses_count": 878,
                        "profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "default_profile_image": false,
                        "following": true,
                        "screen_name": "cacooapp",
                        "show_all_inline_media": false
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 11 00:32:44 +0000 2011",
                    "id_str": "101450945057144832",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/blog.cacoo.com\/ja\/2011\/08\/10\/shortcutkeys\/",
                            "url": "http:\/\/t.co\/r8hkUWx",
                            "indices": [51, 70],
                            "display_url": "blog.cacoo.com\/ja\/2011\/08\/10\/\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "Cacoo",
                            "id_str": "80774303",
                            "id": 80774303,
                            "indices": [3, 12],
                            "screen_name": "cacooapp"
                        }]
                    },
                    "text": "RT @cacooapp: \u77e5\u3063\u3066\u3044\u307e\u3057\u305f\u304b\uff1f\u300c\u30a8\u30c7\u30a3\u30bf\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u300d | Cacoo Blog http:\/\/t.co\/r8hkUWx",
                    "contributors": null,
                    "id": 101450945057144832,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 1,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": null,
                        "id_str": "5384612",
                        "is_translator": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "contributors_enabled": false,
                        "default_profile": false,
                        "id": 5384612,
                        "utc_offset": 32400,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1353,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": null,
                        "time_zone": "Tokyo",
                        "geo_enabled": false,
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_color": "352726",
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "friends_count": 1206,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "statuses_count": 1094,
                        "default_profile_image": false,
                        "following": null,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 11 00:31:59 +0000 2011",
                    "id_str": "101450754551848960",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/blog.cacoo.com\/ja\/2011\/08\/10\/shortcutkeys\/",
                            "url": "http:\/\/t.co\/r8hkUWx",
                            "indices": [37, 56],
                            "display_url": "blog.cacoo.com\/ja\/2011\/08\/10\/\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "\u77e5\u3063\u3066\u3044\u307e\u3057\u305f\u304b\uff1f\u300c\u30a8\u30c7\u30a3\u30bf\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u300d | Cacoo Blog http:\/\/t.co\/r8hkUWx",
                    "contributors": null,
                    "id": 101450754551848960,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 2,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "7dc5ff",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "7dc5ff",
                        "name": "Cacoo",
                        "location": "",
                        "profile_image_url": "http:\/\/a3.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "created_at": "Thu Oct 08 05:28:01 +0000 2009",
                        "profile_link_color": "106bcd",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "80774303",
                        "contributors_enabled": false,
                        "url": "http:\/\/cacoo.com\/",
                        "favourites_count": 1,
                        "default_profile": false,
                        "id": 80774303,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 209,
                        "followers_count": 2009,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "Cacoo\u306e\u66f4\u65b0\u60c5\u5831\u3092\u304a\u5c4a\u3051\u307e\u3059\u3002Cacoo(\u30ab\u30af\u30fc)\u306fWeb\u4e0a\u3067\u7c21\u5358\u306b\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3084\u30ef\u30a4\u30a2\u30fc\u30d5\u30ec\u30fc\u30e0\u3001UML\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u306a\u3069\u306e\u56f3\u5f62\u304c\u4f5c\u6210\u3067\u304d\u308b\u30c9\u30ed\u30fc\u30c4\u30fc\u30eb\u3067\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "profile_background_color": "106bcd",
                        "default_profile_image": false,
                        "friends_count": 2200,
                        "statuses_count": 878,
                        "profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "cacooapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Wed Aug 10 02:56:19 +0000 2011",
                    "id_str": "101124690340364288",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/www.backlog.jp\/blog\/2011\/08\/wikiquicktable.html",
                            "url": "http:\/\/t.co\/5XhXmdc",
                            "indices": [51, 70],
                            "display_url": "backlog.jp\/blog\/2011\/08\/w\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                            "id_str": "19062950",
                            "id": 19062950,
                            "indices": [3, 14],
                            "screen_name": "backlogapp"
                        }, {
                            "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                            "id_str": "19062950",
                            "id": 19062950,
                            "indices": [75, 86],
                            "screen_name": "backlogapp"
                        }]
                    },
                    "text": "RT @backlogapp: \u77e5\u3063\u3066\u3044\u307e\u3057\u305f\u304b\uff1f\u300cWiki\u306e\u8868\u306e\u7de8\u96c6\u300d  | Backlog\u30d6\u30ed\u30b0 http:\/\/t.co\/5XhXmdc via @backlogapp",
                    "contributors": null,
                    "id": 101124690340364288,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "5384612",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1094,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Wed Aug 10 02:54:06 +0000 2011",
                    "id_str": "101124131638099968",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/www.backlog.jp\/blog\/2011\/08\/wikiquicktable.html",
                            "url": "http:\/\/t.co\/5XhXmdc",
                            "indices": [35, 54],
                            "display_url": "backlog.jp\/blog\/2011\/08\/w\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                            "id_str": "19062950",
                            "id": 19062950,
                            "indices": [59, 70],
                            "screen_name": "backlogapp"
                        }]
                    },
                    "text": "\u77e5\u3063\u3066\u3044\u307e\u3057\u305f\u304b\uff1f\u300cWiki\u306e\u8868\u306e\u7de8\u96c6\u300d  | Backlog\u30d6\u30ed\u30b0 http:\/\/t.co\/5XhXmdc via @backlogapp",
                    "contributors": null,
                    "id": 101124131638099968,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 3,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "BDDCAD",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "DDFFCC",
                        "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                        "location": "",
                        "profile_image_url": "http:\/\/a1.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "created_at": "Fri Jan 16 11:36:53 +0000 2009",
                        "profile_link_color": "0084B4",
                        "follow_request_sent": false,
                        "id_str": "19062950",
                        "is_translator": false,
                        "url": "http:\/\/www.backlog.jp",
                        "favourites_count": 10,
                        "contributors_enabled": false,
                        "default_profile": false,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "id": 19062950,
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 60,
                        "followers_count": 623,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "description": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7ba1\u7406\u30c4\u30fc\u30ebBacklog\u306e\u516c\u5f0fTwitter\u3067\u3059\u3002\u8981\u671b\u3001\u3054\u610f\u898b\u3001\u8cea\u554f\u306f@backlogapp\u307e\u3067\u3002",
                        "verified": false,
                        "profile_background_color": "94c500",
                        "geo_enabled": false,
                        "friends_count": 634,
                        "statuses_count": 494,
                        "profile_background_image_url": "http:\/\/a3.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "default_profile_image": false,
                        "following": true,
                        "screen_name": "backlogapp",
                        "show_all_inline_media": false
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Wed Aug 10 02:41:07 +0000 2011",
                    "id_str": "101120865445486592",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/www.backlog.jp\/news\/news\/post-38.html",
                            "url": "http:\/\/t.co\/Scevy4v",
                            "indices": [105, 124],
                            "display_url": "backlog.jp\/news\/news\/post\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "\u3010\u590f\u5b63\u4f11\u696d\u306e\u304a\u77e5\u3089\u305b\u30118\u670812\u65e5(\u91d1)\u301c8\u670816\u65e5(\u706b)\u307e\u3067\u590f\u5b63\u4f11\u696d\u3068\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002\u305d\u306e\u671f\u9593\u306b\u9802\u304d\u307e\u3057\u305f\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u7fcc\u55b6\u696d\u65e5\u306e17\u65e5(\u6c34)\u4ee5\u964d\u306b\u9806\u6b21\u56de\u7b54\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u306e\u3067\u3001\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002http:\/\/t.co\/Scevy4v",
                    "contributors": null,
                    "id": 101120865445486592,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 2,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "web",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "BDDCAD",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "DDFFCC",
                        "name": "\u30d0\u30c3\u30af\u30ed\u30b0",
                        "location": "",
                        "profile_image_url": "http:\/\/a1.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "created_at": "Fri Jan 16 11:36:53 +0000 2009",
                        "profile_link_color": "0084B4",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "19062950",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp",
                        "favourites_count": 10,
                        "default_profile": false,
                        "id": 19062950,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/71429614\/backlog-logo_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 60,
                        "followers_count": 623,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7ba1\u7406\u30c4\u30fc\u30ebBacklog\u306e\u516c\u5f0fTwitter\u3067\u3059\u3002\u8981\u671b\u3001\u3054\u610f\u898b\u3001\u8cea\u554f\u306f@backlogapp\u307e\u3067\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "profile_background_color": "94c500",
                        "default_profile_image": false,
                        "friends_count": 634,
                        "statuses_count": 494,
                        "profile_background_image_url": "http:\/\/a3.twimg.com\/profile_background_images\/33572867\/twitter1.jpg",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "backlogapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Tue Aug 09 01:56:27 +0000 2011",
                    "id_str": "100747236165681152",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/blog.cacoo.com\/ja\/2011\/08\/09\/interview-with-olivier-in-paris\/",
                            "url": "http:\/\/t.co\/e6Z4Jgo",
                            "indices": [45, 64],
                            "display_url": "blog.cacoo.com\/ja\/2011\/08\/09\/\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "Interview with Olivier in Paris | Cacoo Blog http:\/\/t.co\/e6Z4Jgo",
                    "contributors": null,
                    "id": 100747236165681152,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "7dc5ff",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "7dc5ff",
                        "name": "Cacoo",
                        "location": "",
                        "profile_image_url": "http:\/\/a3.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "created_at": "Thu Oct 08 05:28:01 +0000 2009",
                        "profile_link_color": "106bcd",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "80774303",
                        "contributors_enabled": false,
                        "url": "http:\/\/cacoo.com\/",
                        "favourites_count": 1,
                        "default_profile": false,
                        "id": 80774303,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 209,
                        "followers_count": 2009,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "Cacoo\u306e\u66f4\u65b0\u60c5\u5831\u3092\u304a\u5c4a\u3051\u307e\u3059\u3002Cacoo(\u30ab\u30af\u30fc)\u306fWeb\u4e0a\u3067\u7c21\u5358\u306b\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3084\u30ef\u30a4\u30a2\u30fc\u30d5\u30ec\u30fc\u30e0\u3001UML\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u306a\u3069\u306e\u56f3\u5f62\u304c\u4f5c\u6210\u3067\u304d\u308b\u30c9\u30ed\u30fc\u30c4\u30fc\u30eb\u3067\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "profile_background_color": "106bcd",
                        "default_profile_image": false,
                        "friends_count": 2200,
                        "statuses_count": 878,
                        "profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "cacooapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Fri Aug 05 06:36:06 +0000 2011",
                    "id_str": "99368060615532544",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "Chrome OS\u304c\u5c4a\u3044\u305f\u3002\u8d77\u52d5\u306f\u78ba\u304b\u306b\u901f\u3044\uff01\u3042\u3068\u306f\u3075\u3064\u3046\u306bChrome\u3067\u3059\u306d\u3002",
                    "contributors": null,
                    "id": 99368060615532544,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "5384612",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1094,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Fri Aug 05 04:48:55 +0000 2011",
                    "id_str": "99341088871034880",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/blog.cacoo.com\/ja\/2011\/08\/05\/interview-with-wes-in-london\/",
                            "url": "http:\/\/t.co\/W8IlZqy",
                            "indices": [42, 61],
                            "display_url": "blog.cacoo.com\/ja\/2011\/08\/05\/\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "Interview with Wes in London | Cacoo Blog http:\/\/t.co\/W8IlZqy",
                    "contributors": null,
                    "id": 99341088871034880,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "7dc5ff",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "7dc5ff",
                        "name": "Cacoo",
                        "location": "",
                        "profile_image_url": "http:\/\/a3.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "created_at": "Thu Oct 08 05:28:01 +0000 2009",
                        "profile_link_color": "106bcd",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "80774303",
                        "contributors_enabled": false,
                        "url": "http:\/\/cacoo.com\/",
                        "favourites_count": 1,
                        "default_profile": false,
                        "id": 80774303,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/508333240\/profile-1_normal.gif",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 209,
                        "followers_count": 2009,
                        "lang": "ja",
                        "profile_text_color": "333333",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "Cacoo\u306e\u66f4\u65b0\u60c5\u5831\u3092\u304a\u5c4a\u3051\u307e\u3059\u3002Cacoo(\u30ab\u30af\u30fc)\u306fWeb\u4e0a\u3067\u7c21\u5358\u306b\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3084\u30ef\u30a4\u30a2\u30fc\u30d5\u30ec\u30fc\u30e0\u3001UML\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u306a\u3069\u306e\u56f3\u5f62\u304c\u4f5c\u6210\u3067\u304d\u308b\u30c9\u30ed\u30fc\u30c4\u30fc\u30eb\u3067\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "profile_background_color": "106bcd",
                        "default_profile_image": false,
                        "friends_count": 2200,
                        "statuses_count": 878,
                        "profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/50802333\/back.png",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "cacooapp"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Fri Aug 05 04:35:28 +0000 2011",
                    "id_str": "99337703119781888",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": null,
                            "url": "http:\/\/bit.ly\/mUQm7I",
                            "indices": [106, 126]
                        }],
                        "hashtags": [],
                        "user_mentions": [{
                            "name": "agata",
                            "id_str": "5384612",
                            "id": 5384612,
                            "indices": [54, 60],
                            "screen_name": "agata"
                        }]
                    },
                    "text": "\u666e\u53ca\u3059\u308b\u3068\u3044\u3044\u3067\u3059\u306d\u3001\u3068\u304b\u4ed6\u529b\u672c\u9858\u3067\u306f\u3044\u304b\u3093\u3067\u3059\u306d\u3002\u3055\u3063\u305d\u304fCacoo\u3067\u63a1\u7528\u3067\u304d\u306a\u3044\u304b\u8a66\u3057\u3066\u307f\u3088\u3046\u3002 RT @agata: \u30a6\u30a7\u30d6\u30a4\u30f3\u30c6\u30f3\u30c8\u307f\u305f\u3044\u306a\u898f\u683c\u3063\u3066\u307f\u3093\u306a\u6c42\u3081\u3066\u3044\u305f\u3093\u3058\u3083\u306a\u3044\u304b\u306a\u3002\u666e\u53ca\u3059\u308b\u3068\u3044\u3044\u3067\u3059\u306d\u3002 http:\/\/bit.ly\/mUQm7I",
                    "contributors": null,
                    "id": 99337703119781888,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 1,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "5384612",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1094,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Fri Aug 05 04:20:01 +0000 2011",
                    "id_str": "99333814052077568",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": null,
                            "url": "http:\/\/bit.ly\/mUQm7I",
                            "indices": [44, 64]
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "\u30a6\u30a7\u30d6\u30a4\u30f3\u30c6\u30f3\u30c8\u307f\u305f\u3044\u306a\u898f\u683c\u3063\u3066\u307f\u3093\u306a\u6c42\u3081\u3066\u3044\u305f\u3093\u3058\u3083\u306a\u3044\u304b\u306a\u3002\u666e\u53ca\u3059\u308b\u3068\u3044\u3044\u3067\u3059\u306d\u3002 http:\/\/bit.ly\/mUQm7I",
                    "contributors": null,
                    "id": 99333814052077568,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 4,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "is_translator": false,
                        "profile_link_color": "D02B55",
                        "id_str": "5384612",
                        "follow_request_sent": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "contributors_enabled": false,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "time_zone": "Tokyo",
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "geo_enabled": false,
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1095,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Thu Aug 04 09:10:33 +0000 2011",
                    "id_str": "99044541247655936",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": null,
                            "url": "http:\/\/bit.ly\/mTGMkS",
                            "indices": [109, 129]
                        }],
                        "hashtags": [{
                            "text": "cacoo",
                            "indices": [93, 99]
                        }, {
                            "text": "jawsug",
                            "indices": [100, 107]
                        }],
                        "user_mentions": [{
                            "name": "\u3059\u307f\u3072\u308d\u3057",
                            "id_str": "16463057",
                            "id": 16463057,
                            "indices": [3, 12],
                            "screen_name": "hrsm1979"
                        }]
                    },
                    "text": "RT @hrsm1979: AWS\u306e\u4eca\u65e5\u306e\u767a\u8868\u306e\u56f3\u306b\u898b\u899a\u3048\u306e\u3042\u308b\u30a2\u30a4\u30b3\u30f3\u767a\u898b\u3002Jeff\u3055\u3093\u666e\u901a\u306bCacoo\u4f7f\u3063\u3066\u307e\u3059\u306d\u3002\u306f\u3084\u304fAWS\u7528\u306e\u30ab\u30b9\u30bf\u30e0\u30b9\u30c6\u30f3\u30b7\u30eb\u4f5c\u3063\u3066\u516c\u958b\u3057\u3066\u304f\u308c\u306a\u3044\u304b\u306a\u30fc\u3002 #cacoo #jawsug  http:\/\/bit.ly\/mTGMkS",
                    "contributors": null,
                    "id": 99044541247655936,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 2,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/www.crowy.net\/\" rel=\"nofollow\"\u003ECrowy\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "5384612",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1094,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }, {
                    "coordinates": null,
                    "truncated": false,
                    "favorited": false,
                    "created_at": "Wed Aug 03 08:05:32 +0000 2011",
                    "id_str": "98665790194204672",
                    "in_reply_to_user_id_str": null,
                    "entities": {
                        "urls": [{
                            "expanded_url": "http:\/\/blog.cacoo.com\/ja\/2011\/08\/03\/create-stencil-using-cacoo-only\/",
                            "url": "http:\/\/t.co\/nMAEREd",
                            "indices": [34, 53],
                            "display_url": "blog.cacoo.com\/ja\/2011\/08\/03\/\u2026"
                        }],
                        "hashtags": [],
                        "user_mentions": []
                    },
                    "text": "Cacoo\u3060\u3051\u3067\u30aa\u30ea\u30b8\u30ca\u30eb\u30b9\u30c6\u30f3\u30b7\u30eb\u4f5c\u6210 | Cacoo Blog http:\/\/t.co\/nMAEREd",
                    "contributors": null,
                    "id": 98665790194204672,
                    "in_reply_to_status_id_str": null,
                    "retweet_count": 0,
                    "geo": null,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "in_reply_to_user_id": null,
                    "source": "\u003Ca href=\"http:\/\/twitter.com\/tweetbutton\" rel=\"nofollow\"\u003ETweet Button\u003C\/a\u003E",
                    "in_reply_to_screen_name": null,
                    "place": null,
                    "user": {
                        "profile_sidebar_border_color": "829D5E",
                        "profile_background_tile": false,
                        "profile_sidebar_fill_color": "99CC33",
                        "name": "agata",
                        "location": "",
                        "profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "created_at": "Sat Apr 21 19:05:46 +0000 2007",
                        "profile_link_color": "D02B55",
                        "follow_request_sent": false,
                        "is_translator": false,
                        "id_str": "5384612",
                        "contributors_enabled": false,
                        "url": "http:\/\/www.backlog.jp\/blog\/",
                        "favourites_count": 4,
                        "default_profile": false,
                        "id": 5384612,
                        "profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/723305847\/agata_pict_normal.jpg",
                        "utc_offset": 32400,
                        "profile_use_background_image": true,
                        "listed_count": 102,
                        "followers_count": 1354,
                        "lang": "en",
                        "profile_text_color": "3E4415",
                        "protected": false,
                        "notifications": false,
                        "geo_enabled": false,
                        "time_zone": "Tokyo",
                        "description": "\u682a\u5f0f\u4f1a\u793e\u30cc\u30fc\u30e9\u30dc\u6240\u5c5e\u3002Cacoo\u3068\u304bCubby\u3068\u304bBacklog\u3068\u304b\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002",
                        "verified": false,
                        "profile_background_image_url_https": "https:\/\/si0.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "profile_background_color": "352726",
                        "default_profile_image": false,
                        "friends_count": 1206,
                        "statuses_count": 1094,
                        "profile_background_image_url": "http:\/\/a1.twimg.com\/images\/themes\/theme5\/bg.gif",
                        "following": true,
                        "show_all_inline_media": false,
                        "screen_name": "agata"
                    },
                    "in_reply_to_status_id": null
                }],
                "options": [{
                    "include_available_features": 1,
                    "include_entities": 1,
                    "contributor_details": true,
                    "pc": true
                }],
                "api_request_name": "statuses\/home_timeline"
            }, {
                "json": {
                    "sleep_time": {
                        "end_time": null,
                        "enabled": false,
                        "start_time": null
                    },
                    "language": "ja",
                    "always_use_https": false,
                    "discoverable_by_email": true,
                    "geo_enabled": false
                },
                "options": [{}],
                "api_request_name": "account\/settings"
            }],
            "showWelcomeBanner": false,
            "userProperties": {
                "emailDiscoverabilitySet": true,
                "mobilePhoneDiscoverabilitySet": false,
                "deviceAddress": null,
                "discoverableByEmail": true,
                "discoverableByMobilePhone": false,
                "emailAddress": "agattino@gmail.com",
                "deviceSetup": false
            },
            "postAuthenticityToken": "a43434558fc1716765c5d3dbfc98ae9b11d2762c",
            "deciderFeatures": {
                "dashboard_activity_followers": 1,
                "tweet_stream_home_polling": 1,
                "contact_import_stream": 1,
                "more_lists_component": 1,
                "people_stream_list_followers": 1,
                "fake_loggedout_decider": 1,
                "message_stream": 1,
                "big_photo_permalink": 1,
                "in_reply_to_component": 1,
                "infinite_scroll": 1,
                "profile_combined_api": 1,
                "phoenix_aol_video": 1,
                "people_stream_friends": 1,
                "recent_tweets_component": 1,
                "tweet_stream_your_tweets_retweeted_polling": 1,
                "tweet_stream_search": 1,
                "logged_out_people_search": 1,
                "tweet_stream_following_polling": 1,
                "tweet_stream_retweets_by_others_polling": 1,
                "phoenix_facets_videos": 1,
                "geo_show_similar_places": 1,
                "mobile_download_gallery": 1,
                "tweet_stream_retweets_by_others": 1,
                "phoenix_tweetbox_talon": 1,
                "tweet_stream_user": 1,
                "phoenix_search_relevance_logged_out": 1,
                "list_stream_own_lists": 1,
                "photo_copy_paste_inception": 1,
                "phoenix_puffin": 1,
                "phoenix_facets": 1,
                "flock": 1,
                "tweet_stream_following": 1,
                "promoted_accounts_in_whotofollow_viewall": 1,
                "email_device_settings": 1,
                "phoenix_search_relevance": 1,
                "dashboard_activity_listed": 1,
                "phoenix_local_plancast": 1,
                "suggestion_categories_streams": 1,
                "rtl_display": 1,
                "phoenix_local_meetup": 1,
                "tweet_stream_retweets_by_you_polling": 1,
                "tweet_stream_user_polling": 1,
                "i18n_new_translation_center": 1,
                "whotofollow_similarities": 1,
                "phoenix_amazon_details": 1,
                "whotofollow_recommendations": 1,
                "wtf_signup_suggestions": 1,
                "phoenix_autocomplete": 1,
                "local_trends": 1,
                "phoenix_apple_itunes_more": 1,
                "tweet_streams_polling": 1,
                "people_stream_followers": 1,
                "phoenix_scribe": 1,
                "geo_allow_set_location_manually": 1,
                "phoenix_local_foursquare": 1,
                "activity_modal": 1,
                "tweet_stream_favorites": 1,
                "geo_ui_dropdown_available": 1,
                "people_stream_people_search": 1,
                "phoenix_facets_logged_out": 1,
                "inline_media_component": 1,
                "promptbird_phoenix": 1,
                "phoenix_pretty_links": 1,
                "dashboard_activity_following": 1,
                "old_webclient_events": 1,
                "tweet_stream_favorites_polling": 1,
                "phoenix_talon_on_copy": 1,
                "tweet_geo_component": 1,
                "people_streams": 1,
                "trends_component": 1,
                "use_scribe_post": 1,
                "tweet_stream_mentions": 1,
                "tweet_streams": 1,
                "geo_ui": 1,
                "list_streams": 1,
                "tweet_stream_search_polling": 1,
                "place_tweets_component": 1,
                "dashboard_activity_favorites": 1,
                "phoenix_turkey_flash": 1,
                "whotofollow_random_sample": 1,
                "tweet_stream_retweets_by_you": 1,
                "phoenix_frontpage_rotate_avatars": 1,
                "search_stream_client_events": 1,
                "tweet_stream_list": 1,
                "ptw_negative_feedback": 1,
                "media_flagging": 1,
                "conversations": 1,
                "place_users_stream": 1,
                "social_context": 1,
                "activity_dashboard": 1,
                "list_stream_memberships": 1,
                "html5Routing": 1,
                "https_referers": 1,
                "promo_component": 1,
                "advanced_search": 1,
                "people_stream_follower_requests": 1,
                "phoenix_search_dropdown": 1,
                "phoenix_turkey_permalink": 1,
                "phoenix_local_gowalla": 1,
                "geo_place_creation": 1,
                "contact_import": 1,
                "tweet_stream_mentions_polling": 1,
                "geo_location": 1,
                "welcome_warm_signup": 1,
                "list_stream_subscriptions": 1,
                "phoenix_apple_itunes": 1,
                "mt_tweet_backend_bing": 1,
                "phoenix_first_time": 1,
                "place_people_component": 1,
                "phoenix_instagram_and_friends": 1,
                "phoenix_facets_images": 1,
                "geo_more_places": 1,
                "people_stream_list_members": 1,
                "tweet_stream_your_tweets_retweeted": 1,
                "tweet_stream_home": 1,
                "user_shuffler": 1,
                "retweeters_component": 1,
                "tweet_stream_list_polling": 1,
                "mobile_download_gallery_logged_out": 1,
                "phoenix_turkey_html5_resize": 1,
                "japanese_ad_component": 1,
                "newest_list_members_component": 1,
                "onebox_user_search": 1,
                "phoenix_sandboxed_ajax": 1,
                "turkey": 1,
                "scribe_client_event": 1
            },
            "abBuckets": {
                "view_all_page_wtf_reasons_92": {
                    "bucket": "control",
                    "version": 2,
                    "experiment_key": "view_all_page_wtf_reasons_92",
                    "bucket_names": ["control", "show_nothing"]
                },
                "remember_me_on_signup_83": {
                    "bucket": "experiment",
                    "version": 15,
                    "experiment_key": "remember_me_on_signup_83",
                    "bucket_names": ["control", "experiment"]
                },
                "activity_up_top_98": {
                    "bucket": "control",
                    "version": 4,
                    "experiment_key": "activity_up_top_98",
                    "bucket_names": ["control", "top", "bottom"]
                }
            }
        });
    });


    provide("boot/init", function(C) {
        var B = {
            add: function(H) {
                twttr.bootTimings.data.push({
                    name: H,
                    timestamp: new Date()
                })
            },
            data: [],
            done: function() {
                twttr.bootTimings.add = twttr.bootTimings.done = $.noop;
                $.each(loadrunner.Script.times, function(H, I) {
                    $.each(I, function(J, K) {
                        twttr.bootTimings.data.push({
                            name: ["bundle", H, J].join(" "),
                            timestamp: K
                        })
                    })
                });
                twttr.Profiler.logDataSet("Boot", twttr.appStartTime, twttr.bootTimings.data);
                twttr.bootTimings = null
            }
        };

        function D(I) {
            for (var H in I) {
                if (I.hasOwnProperty(H)) {
                    twttr[H] = I[H]
                }
            }
        }
        function A(H) {
            twttr.bootTimings && twttr.bootTimings.add("bootstrap_data process start");
            D(H.twttr);
            signal(">payload");
            if (H.boomr) {
                using(H.boomr).load().then(function() {
                    delete BOOMR.plugins.RT;
                    BOOMR.init({
                        allow_ssl: true,
                        autorun: false,
                        user_ip: H.remoteIP,
                        BW: {
                            base_url: twttr.hosts.local + "/images/boomerang/"
                        }
                    });
                    using(">setupComplete", "util").as(function(I) {
                        BOOMR.page_ready();
                        BOOMR.subscribe("before_beacon", function(M) {
                            if (!M.bw) {
                                return
                            }
                            var K = parseInt(M.bw / 1024, 10);
                            var L = parseInt((M.bw_err * 100) / M.bw, 10);
                            var J = parseInt((M.lat_err * 100) / M.lat, 10);
                            scribble("measurement", {
                                load_time_ms: M.t_done,
                                bandwidth_kbytes: K,
                                bandwidth_error_percent: L,
                                latency_ms: M.lat,
                                latency_error_percent: J,
                                product: "webclient"
                            }, "boomerang");
                            if (I.util.params()["boomr"]) {
                                twttr.showMessage("Bandwidth: " + I.util.addCommas(K) + " KB/s &plusmn; " + L + "%<br />Latency: " + M.lat + " ms &plusmn; " + M.lat_err, true)
                            }
                        })
                    })
                })
            }
            if (H.pageLocaleJS) {
                twttr.bootTimings && twttr.bootTimings.add("i18n fetch start");
                using(H.pageLocaleJS).load().then(function() {
                    twttr.bootTimings && twttr.bootTimings.add("i18n fetch finish");
                    signal(">languageData")
                })
            } else {
                signal(">languageData")
            }
            using(">defaultViews", twttr.bundleMore, function() {
                if (H.showWelcomeBanner) {
                    (new twttr.views.WelcomeToPhoenixBanner()).render($("#banners"), "append")
                }
                if (H.flashNotice) {
                    $("#flash-message-storage").html(H.flashNotice).show()
                }
            });
            using(">decider", function() {
                twttr.decider._updateFeatures(H.deciderFeatures)
            });
            using(">ab_decider", function() {
                twttr.abdecider._updateExperiments(H.abBuckets)
            });
            using(">api_ready", function() {
                twttr.API.setConfig({
                    postAuthenticityToken: H.postAuthenticityToken
                });
                $("input.authenticity_token").val(H.postAuthenticityToken);
                var L = H.requestCacheSeedData;
                for (var J = 0, I = L.length; J < I; ++J) {
                    var K = L[J];
                    twttr.API._requestCache.inject(K.api_request_name, K.options, K.json, 1)
                }
                signal(">request_cache_seeded");
                if (H.homeTimelineFetchSize) {
                    twttr.API.homeTimelineFetchSize = H.homeTimelineFetchSize
                }
            });
            twttr.bootTimings && twttr.bootTimings.add("bootstrap_data process finish")
        }
        function G() {
            twttr.anywhere.api.initialize();
            twttr.API = {};
            twttr.aug(twttr.API, twttr.anywhere.api.models);
            twttr.aug(twttr.API, {
                globalEvents: twttr.anywhere.api.globalEvents
            });
            twttr.API.setConfig = twttr.anywhere.api.updateConfig;
            twttr.API.getConfig = function() {
                return twttr.anywhere.api.config
            };
            if (!twttr.API.util) {
                twttr.API.util = {}
            }
            twttr.aug(twttr.API.util, twttr.anywhere.api.util);
            if (!twttr.API._requestCache) {
                twttr.API._requestCache = twttr.anywhere.api.cache
            }
            twttr.API.setConfig({
                cacheObjects: true,
                includeEntities: true
            });
            twttr.extendAPI()
        }
        function F() {
            if (twttr.loggedIn) {
                twttr.bootTimings && twttr.bootTimings.add("initCurrentUser start");
                using("boot/bootstrap_data", ">request_cache_seeded", function(H) {
                    twttr.API.User.current({
                        error: function() {
                            window.location.reload(true)
                        },
                        success: function(I) {
                            twttr.currentUser = I;
                            for (var J in H.userProperties) {
                                twttr.currentUser.sync(J, H.userProperties[J] || false)
                            }
                            twttr.bootTimings && twttr.bootTimings.add("initCurrentUser finish");
                            signal(">allCurrentUserDataLoaded")
                        }
                    })
                })
            } else {
                signal(">allCurrentUserDataLoaded")
            }
        }
        function E(H) {
            var I = new Date();
            using(H).load().then(function() {
                var J = new Date();
                using("boot/bootstrap_data", function() {
                    twttr.Profiler.logPreviousEvent("twttr.bundles fetched", I, J)
                })
            })
        }
        C({
            init: function(H) {
                D(H.twttr);
                twttr.appStartTime = document.startTime;
                twttr.geo = twttr.geo || {};
                twttr.session = twttr.session || {};
                twttr.session.impressionId = twttr.appStartTime + Math.random();
                twttr.isLocalhost = location.hostname.match(/localhost\.twitter\.com/);
                twttr.bootTimings = H.profiling ? B : null;
                for (var I = 0; I < H.loadrunnerAssets.length; I++) {
                    using.bundles.push(H.loadrunnerAssets[I])
                }
                twttr.proto = window.location.protocol.replace(":", "");
                twttr.isSSL = function() {
                    return twttr.proto === "https"
                };
                twttr.createIframe = function(K, J) {
                    var N = document.createElement("div");
                    N.innerHTML = '<iframe tabindex="-1" role="presentation" style="position:absolute;top:-9999px;" src="' + K + '"></iframe>';
                    var L = N.firstChild;
                    var M = function() {
                            J.apply(L, arguments)
                        };
                    L.addEventListener ? L.addEventListener("load", M, false) : L.attachEvent("onload", M);
                    document.body.insertBefore(L, document.body.firstChild);
                    return L
                };
                if (!H.inline_bootstrap_data) {
                    provide("boot/bootstrap_data", function(J) {
                        var K = [];
                        K.push("json!/account/bootstrap_data" + window.location.search + (window.location.search ? "&" : "?") + "r=" + Math.random());
                        if (typeof JSON === "undefined") {
                            K.push(twttr.bundleCore)
                        }
                        twttr.bootTimings && twttr.bootTimings.add("bootstrap_data fetch start");
                        using(K, function(M) {
                            twttr.bootTimings && twttr.bootTimings.add("bootstrap_data fetch finish");
                            var L = JSON.parse(M);
                            J(L)
                        })
                    })
                }
                E(H.assets);
                using(twttr.bundleCore, function() {
                    twttr.anywhere.remote = {};
                    G();
                    signal(">api_ready");
                    using(">request_cache_seeded", function() {
                        F()
                    })
                });
                using(H.setupDependencies, function() {
                    twttr.bootTimings && twttr.bootTimings.add("setup start");
                    jQuery.ready();
                    twttr.setup();
                    twttr.bootTimings && twttr.bootTimings.add("setup finish");
                    signal(">setupComplete");
                    using(twttr.bundleMore).load()
                });
                using(twttr.bundleMore, function() {
                    signal(">allCodeLoaded")
                });
                using("boot/bootstrap_data", A);
                twttr.createIframe(H.pReceiverURL, function() {
                    var J = this;
                    using(twttr.bundleCore, function() {
                        twttr.anywhere.remote.server = J;
                        twttr.anywhere.api.util.RemoteRequest.flush()
                    })
                })
            }
        })
    });
    using('boot/init', function(boot) {
        var data = {
            "loadrunnerAssets": [{
                "http:\/\/a0.twimg.com\/b\/bundle\/t1-more-es-201108171009.js": ["bundle\/t1-more-es"],
                "http:\/\/a3.twimg.com\/b\/bundle\/t1-core-de-201108171009.js": ["bundle\/t1-core-de"],
                "http:\/\/a0.twimg.com\/b\/bundle\/t1-more-fr-201108171009.js": ["bundle\/t1-more-fr"],
                "http:\/\/a2.twimg.com\/b\/bundle\/ie6-id-201108161000.js": ["bundle\/ie6-id"],
                "http:\/\/a2.twimg.com\/b\/bundle\/signup-en-201108161000.js": ["bundle\/signup-en"],
                "http:\/\/a3.twimg.com\/b\/bundle\/sandbox-ru-201108161000.js": ["bundle\/sandbox-ru"],
                "http:\/\/a1.twimg.com\/b\/bundle\/t1-more-de-201108171009.js": ["bundle\/t1-more-de"],
                "http:\/\/a1.twimg.com\/b\/bundle\/sandbox-it-201108161000.js": ["bundle\/sandbox-it"],
                "http:\/\/a3.twimg.com\/b\/bundle\/ie6-tr-201108161000.js": ["bundle\/ie6-tr"],
                "http:\/\/a0.twimg.com\/b\/bundle\/sandbox-fr-201108161000.js": ["bundle\/sandbox-fr"],
                "http:\/\/a2.twimg.com\/b\/bundle\/t1-core-pt-201108171009.js": ["bundle\/t1-core-pt"],
                "http:\/\/a0.twimg.com\/b\/bundle\/t1-more-pt-201108171009.js": ["bundle\/t1-more-pt"],
                "http:\/\/a1.twimg.com\/b\/bundle\/t1-core-en-201108171009.js": ["bundle\/t1-core-en"],
                "http:\/\/a3.twimg.com\/b\/bundle\/phoenix-core-en-201108171009.js": ["bundle\/phoenix-core-en"],
                "http:\/\/a1.twimg.com\/b\/bundle\/signup-nl-201108161000.js": ["bundle\/signup-nl"],
                "http:\/\/a0.twimg.com\/b\/bundle\/t1-core-tr-201108171009.js": ["bundle\/t1-core-tr"],
                "http:\/\/a3.twimg.com\/b\/bundle\/t1-more-ja-201108171009.js": ["bundle\/t1-more"],
                "http:\/\/a2.twimg.com\/b\/bundle\/sandbox-tr-201108161000.js": ["bundle\/sandbox-tr"],
                "http:\/\/a3.twimg.com\/b\/bundle\/t1-core-it-201108171009.js": ["bundle\/t1-core-it"],
                "http:\/\/a1.twimg.com\/b\/bundle\/phoenix-more-ru-201108171009.js": ["bundle\/phoenix-more-ru"],
                "http:\/\/a1.twimg.com\/b\/bundle\/sandbox-id-201108161000.js": ["bundle\/sandbox-id"],
                "http:\/\/a3.twimg.com\/b\/bundle\/phoenix-more-de-201108171009.js": ["bundle\/phoenix-more-de"],
                "http:\/\/a0.twimg.com\/b\/bundle\/signup-de-201108161000.js": ["bundle\/signup-de"],
                "http:\/\/a1.twimg.com\/b\/bundle\/t1-more-it-201108171009.js": ["bundle\/t1-more-it"],
                "http:\/\/a1.twimg.com\/b\/bundle\/phoenix-more-ja-201108171009.js": ["bundle\/phoenix-more"],
                "http:\/\/a1.twimg.com\/b\/bundle\/signup-ko-201108161000.js": ["bundle\/signup-ko"],
                "http:\/\/a3.twimg.com\/b\/bundle\/signup-es-201108161000.js": ["bundle\/signup-es"],
                "http:\/\/a0.twimg.com\/b\/bundle\/t1-core-nl-201108171009.js": ["bundle\/t1-core-nl"],
                "http:\/\/a1.twimg.com\/b\/bundle\/ie6-es-201108161000.js": ["bundle\/ie6-es"],
                "http:\/\/a3.twimg.com\/b\/bundle\/t1-more-en-201108171009.js": ["bundle\/t1-more-en"],
                "http:\/\/a3.twimg.com\/b\/bundle\/signup-pt-201108161000.js": ["bundle\/signup-pt"],
                "http:\/\/a0.twimg.com\/b\/bundle\/phoenix-more-nl-201108171009.js": ["bundle\/phoenix-more-nl"],
                "http:\/\/a1.twimg.com\/b\/bundle\/ie6-fr-201108161000.js": ["bundle\/ie6-fr"],
                "http:\/\/a1.twimg.com\/b\/bundle\/ie6-pt-201108161000.js": ["bundle\/ie6-pt"],
                "http:\/\/a0.twimg.com\/b\/bundle\/t1-core-ko-201108171009.js": ["bundle\/t1-core-ko"],
                "http:\/\/a2.twimg.com\/b\/bundle\/t1-core-fr-201108171009.js": ["bundle\/t1-core-fr"],
                "http:\/\/a2.twimg.com\/b\/bundle\/ie6-de-201108161000.js": ["bundle\/ie6-de"],
                "http:\/\/a1.twimg.com\/b\/bundle\/t1-core-ru-201108171009.js": ["bundle\/t1-core-ru"],
                "http:\/\/a2.twimg.com\/b\/bundle\/phoenix-more-es-201108171009.js": ["bundle\/phoenix-more-es"],
                "http:\/\/a2.twimg.com\/b\/bundle\/t1-more-tr-201108171009.js": ["bundle\/t1-more-tr"],
                "http:\/\/a3.twimg.com\/b\/bundle\/phoenix-more-it-201108171009.js": ["bundle\/phoenix-more-it"],
                "http:\/\/a3.twimg.com\/b\/bundle\/sandbox-en-201108161000.js": ["bundle\/sandbox-en"],
                "http:\/\/a1.twimg.com\/b\/bundle\/t1-more-id-201108171009.js": ["bundle\/t1-more-id"],
                "http:\/\/a0.twimg.com\/b\/bundle\/phoenix-more-ko-201108171009.js": ["bundle\/phoenix-more-ko"],
                "http:\/\/a1.twimg.com\/b\/bundle\/phoenix-core-de-201108171009.js": ["bundle\/phoenix-core-de"],
                "http:\/\/a1.twimg.com\/b\/bundle\/t1-core-ja-201108171009.js": ["bundle\/t1-core"],
                "http:\/\/a0.twimg.com\/b\/bundle\/signup-it-201108161000.js": ["bundle\/signup-it"],
                "http:\/\/a2.twimg.com\/b\/bundle\/signup-ru-201108161000.js": ["bundle\/signup-ru"],
                "http:\/\/a3.twimg.com\/b\/bundle\/t1-core-id-201108171009.js": ["bundle\/t1-core-id"],
                "http:\/\/a2.twimg.com\/b\/bundle\/signup-ja-201108161000.js": ["bundle\/signup"],
                "http:\/\/a2.twimg.com\/b\/bundle\/phoenix-more-pt-201108171009.js": ["bundle\/phoenix-more-pt"],
                "http:\/\/a3.twimg.com\/b\/bundle\/signup-fr-201108161000.js": ["bundle\/signup-fr"],
                "http:\/\/a3.twimg.com\/b\/bundle\/phoenix-core-ru-201108171009.js": ["bundle\/phoenix-core-ru"],
                "http:\/\/a2.twimg.com\/b\/bundle\/t1-more-nl-201108171009.js": ["bundle\/t1-more-nl"],
                "http:\/\/a1.twimg.com\/b\/bundle\/phoenix-core-it-201108171009.js": ["bundle\/phoenix-core-it"],
                "http:\/\/a2.twimg.com\/b\/bundle\/phoenix-core-tr-201108171009.js": ["bundle\/phoenix-core-tr"],
                "http:\/\/a3.twimg.com\/b\/bundle\/ie6-nl-201108161000.js": ["bundle\/ie6-nl"],
                "http:\/\/a3.twimg.com\/b\/bundle\/phoenix-core-ja-201108171009.js": ["bundle\/phoenix-core"],
                "http:\/\/a0.twimg.com\/b\/bundle\/signup-id-201108161000.js": ["bundle\/signup-id"],
                "http:\/\/a3.twimg.com\/b\/bundle\/phoenix-more-id-201108171009.js": ["bundle\/phoenix-more-id"],
                "http:\/\/a0.twimg.com\/b\/bundle\/ie6-ru-201108161000.js": ["bundle\/ie6-ru"],
                "http:\/\/a0.twimg.com\/b\/bundle\/phoenix-core-es-201108171009.js": ["bundle\/phoenix-core-es"],
                "http:\/\/a3.twimg.com\/b\/bundle\/ie6-ko-201108161000.js": ["bundle\/ie6-ko"],
                "http:\/\/a1.twimg.com\/b\/bundle\/sandbox-de-201108161000.js": ["bundle\/sandbox-de"],
                "http:\/\/a0.twimg.com\/b\/bundle\/phoenix-core-fr-201108171009.js": ["bundle\/phoenix-core-fr"],
                "http:\/\/a2.twimg.com\/b\/bundle\/t1-more-ko-201108171009.js": ["bundle\/t1-more-ko"],
                "http:\/\/a0.twimg.com\/b\/bundle\/ie6-ja-201108161000.js": ["bundle\/ie6"],
                "http:\/\/a2.twimg.com\/b\/bundle\/ie6-it-201108161000.js": ["bundle\/ie6-it"],
                "http:\/\/a1.twimg.com\/b\/bundle\/phoenix-more-en-201108171009.js": ["bundle\/phoenix-more-en"],
                "http:\/\/a0.twimg.com\/b\/bundle\/sandbox-es-201108161000.js": ["bundle\/sandbox-es"],
                "http:\/\/a0.twimg.com\/b\/bundle\/phoenix-more-tr-201108171009.js": ["bundle\/phoenix-more-tr"],
                "http:\/\/a0.twimg.com\/b\/bundle\/phoenix-core-pt-201108171009.js": ["bundle\/phoenix-core-pt"],
                "http:\/\/a3.twimg.com\/b\/bundle\/t1-more-ru-201108171009.js": ["bundle\/t1-more-ru"],
                "http:\/\/a2.twimg.com\/b\/bundle\/phoenix-core-nl-201108171009.js": ["bundle\/phoenix-core-nl"],
                "http:\/\/a2.twimg.com\/b\/bundle\/sandbox-nl-201108161000.js": ["bundle\/sandbox-nl"],
                "http:\/\/a0.twimg.com\/b\/bundle\/ie6-en-201108161000.js": ["bundle\/ie6-en"],
                "http:\/\/a2.twimg.com\/b\/bundle\/phoenix-more-fr-201108171009.js": ["bundle\/phoenix-more-fr"],
                "http:\/\/a2.twimg.com\/b\/bundle\/sandbox-ko-201108161000.js": ["bundle\/sandbox-ko"],
                "http:\/\/a0.twimg.com\/b\/bundle\/sandbox-pt-201108161000.js": ["bundle\/sandbox-pt"],
                "http:\/\/a3.twimg.com\/b\/bundle\/sandbox-ja-201108161000.js": ["bundle\/sandbox"],
                "http:\/\/a1.twimg.com\/b\/bundle\/signup-tr-201108161000.js": ["bundle\/signup-tr"],
                "http:\/\/a2.twimg.com\/b\/bundle\/phoenix-core-ko-201108171009.js": ["bundle\/phoenix-core-ko"],
                "http:\/\/a1.twimg.com\/b\/bundle\/phoenix-core-id-201108171009.js": ["bundle\/phoenix-core-id"],
                "http:\/\/a2.twimg.com\/b\/bundle\/t1-core-es-201108171009.js": ["bundle\/t1-core-es"]
            }],
            "twttr": {
                "hosts": {
                    "upload": "http:\/\/upload.twitter.com",
                    "local": "http:\/\/twitter.com",
                    "remote": "http:\/\/api.twitter.com"
                },
                "isT1": false,
                "bundleMore": "bundle\/phoenix-more",
                "domains": {
                    "upload": "upload.twitter.com",
                    "local": "twitter.com",
                    "remote": "api.twitter.com"
                },
                "placeDataPrefix": "http:\/\/geo.l3.twitter.com\/places\/autocomplete_places-",
                "bundleCore": "bundle\/phoenix-core",
                "remoteIP": "61.22.195.22",
                "promptbird": {
                    "cache": {
                        "data": {
                            "email": "agattino@gmail.com"
                        },
                        "prompt": {
                            "format": "",
                            "prompt_id": "0",
                            "template_name": ""
                        }
                    }
                },
                "loggedIn": true,
                "requestFullCity": "jp,07,fukuoka"
            },
            "pReceiverURL": "http:\/\/api.twitter.com\/receiver.html",
            "profiling": false,
            "setupDependencies": ["\u003EallCurrentUserDataLoaded", "\u003Erequest_cache_seeded", "bundle\/phoenix-core", "\u003ElanguageData"],
            "inline_bootstrap_data": true,
            "assets": ["bundle\/phoenix-core"],
            "sandboxes": {
                "detailsPaneContent": "http:\/\/a0.twimg.com\/a\/1313600695\/details_pane_content_sandbox.html",
                "jsonp": "http:\/\/a3.twimg.com\/a\/1313600695\/jsonp_sandbox.html"
            }
        };
        boot.init(data);
    });
});
