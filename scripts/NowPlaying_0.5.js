registerPlugin({
    name: "Now Playing",
    version: "0.5",
    description: "Sets a channel/spacer/bot to the currently playing song.",
    author: "SacredSkull <me@sacredskull.net>, VJean <admin@vjean.net>",
    vars: {
        TitleChannel: {
            title: "Title Channel - Channel/spacer to display the track artist.",
            type: "select",
            options: ['on','off']
        },
        TitleChannelCh: {
            title: "Title Channel - Channel/spacer to display the track title.",
            type: "channel",
            indent: 1,
            conditions: [ { field: 'TitleChannel', value: 0 } ]
        },
        TitleChannelFormat: {
            title: "Title Channel Format - Defaults to a pretty spacer for the track title: '[cspacer0]♫ %trackInfo ♫' becomes '[cspacer0]♫ Symphony No. 5 ♫'.",
            type: "string",
            placeholder: "[cspacer0]♫ %trackInfo ♫",
            indent: 1,
            conditions: [ { field: 'TitleChannel', value: 0 } ]
        },

        ArtistChannel: {
            title: "Artist Channel - Channel/spacer to display the track artist.",
            type: "select",
            options: ['on','off']
        },
        ArtistChannelCh: {
            title: "Artist Channel - Channel/spacer to display the track artist.",
            type: "channel",
            indent: 1,
            conditions: [ { field: 'ArtistChannel', value: 0 } ]
        },
        ArtistChannelFormat: {
            title: "Artist Channel Format - Defaults to a pretty spacer for the track artist: '[cspacer0]🎧 %trackInfo 🎧' becomes '[cspacer0]🎧 Beethoven 🎧'.",
            type: "string",
            placeholder: "[cspacer0]🎧 %trackInfo 🎧",
            indent: 1,
            conditions: [ { field: 'ArtistChannel', value: 0 } ]
        },

        NothingPlayingName: {
            title: "Nothing Playing Format - What should the channel be called if nothing is playing?",
            type: "string",
            placeholder: "[cspacer0]♫ Playing nothing :( ♫",
            indent: 0
//            conditions: [ { field: 'TitleChannel', value: 0 }, { field: 'ArtistChannel', value: 0 }, { field: 'changeNick', value: 0 } ]
        },

        changeNick: {
            title: "Change nickname of the bot to match",
            type: "select",
            options: ['on','off']
        }, 
        changeNickDesc: {
            title: "Change Description of the bot to match",
            type: "select",
            options: ['on','off'],
            indent: 1,
            conditions: [ { field: 'changeNick', value: 0 } ]
        }, 
        changeNickFormat: {
            title: "Format for out. %a - Artist, %t - Title, %al - Album, %s - Separator",
            type: "string", 
            placeholder: "%a%s%t",
            indent: 1,
            conditions: [ { field: 'changeNick', value: 0 } ]
        },
        changeNickSeparator: {
            title: "Separator",
            type: "string", 
            placeholder: "―",
            indent: 1,
            conditions: [ { field: 'changeNick', value: 0 } ]
        },
        changeNickBleacherNick: {
            title: "Clean Artist, Title and Album from nickname via Bleacher match",
            type: "select",
            options: ['on','off'],
            indent: 1,
            conditions: [ { field: 'changeNick', value: 0 } ]
        },
        changeNickBleacherDesc: {
            title: "Clean Artist, Title and Album from description text via Bleacher match",
            type: "select",
            options: ['on','off'],
            indent: 1,
            conditions: [ { field: 'changeNick', value: 0 } ]
        },

        channelHistory: {
            title: "Write history playing of track to channel description",
            type: "select",
            options: ['on','off']
        }, 
        channelHistoryCurrCh: {
            title: "Write history playing of track to selected channel description",
            type: "select",
            options: ['Current channel','Select channel'],
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 } ]
        }, 
        channelHistorySelCh: {
            title: "Select channel for write history",
            type: "channel",
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 }, { field: 'channelHistoryCurrCh', value: 1 } ]
        },
        channelHistoryFormat: {
            title: "Format for out. %a - Artist, %t - Title, %al - Album, %s - Separator, %du - Duration, %f - Filename, %n - New Line, %plid - Playlist ID, %plname - Name of current playlist track, %now, %date, %time - now datetime/date/time in locale format",
            type: "string", 
            placeholder: "%a %s %t%n",
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 } ]
        },
        channelHistorySeparator: {
            title: "Separator",
            type: "string", 
            placeholder: "―",
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 } ]
        },
        channelHistoryTopic: {
            title: "Update Topic",
            type: "select",
            options: ['on','off']
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 } ]
        },
        channelHistoryBleacherDesc: {
                title: "Clean Artist, Title and Album from description text via Bleacher match",
                type: "select",
                options: ['on','off'],
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 } ]
        },
        channelHistoryBleacherTopic: {
                title: "Clean Artist, Title and Album from channel topic via Bleacher match",
                type: "select",
                options: ['on','off'],
            indent: 1,
            conditions: [ { field: 'channelHistory', value: 0 } ]
        },

        ttsAnnounce: {
            title: "Announce Cleaned Tracks Over TTS - Note: you must have TTS working in the instance settings - this will not magically make it work.",
            type: "select",
            options: ['on','off']
        },
        channelAnnounce: {
            title: "Announce cleaned up tracks in the current channel chat?",
            type: "select",
            options: ['on','off']
        },
        cleanTTS: {
            title: "Limit allowed characters for TTS - may sound better, may sound worse depending on the TTS. E.g. ft. becomes feat., removes brackets, etc.",
            type: "select",
            options: ['on','off'],
            indent: 1
//            conditions: [ { field: 'ttsAnnounce', value: 0 } ]
        },

        XAdvancedSettings: {
            title: 'Show advanced settings',
            type: 'select',
            options: ['No','Yes']
        },
        XDelData: {
            title: 'X Delete stored data (chDesc,chFormat)',
            type: 'select',
            options: ['No','Yes'],
            indent: 1,
            conditions: [ { field: 'XAdvancedSettings', value: 1 } ]
        },
        XLog: {
            title: 'X Send log messages. sinusbot.log()',
            type: 'select',
            options: ['No','Yes'],
            indent: 1,
            conditions: [ { field: 'XAdvancedSettings', value: 1 } ]
        },

        Xbleacher: {
            title: "Bleacher RegEx (multiline converted to string). Check on https://regex101.com/#javascript",
            type: "multiline",
            indent: 1,
            conditions: [ { field: 'XAdvancedSettings', value: 1 } ],
            placeholder: "/(?:[\[|(]{0,1}?Official(?: Music){0,1}(?: Audio){0,1}(?: Video){0,1}(?: HD){0,1}(?: Track)*[\]\)]{0,1})|(?:[\w]*?VEVO)|(?:Radioshow:)|[\[\(]*?(?:(?:w*?\/[ ]*?)|with )Lyrics[\]\)]*?|(?:\[LIVE\] )|(?: \(join the chat\)$)|[\[\(](?:with[ ]*?|w\/[ ]*?)*?Lyrics[\],\)]|(?: \[Repeat\]$)|(?:[ ]*?-[ ]*?)*?[\[,\(]{1}(?:(?:[\w,\s]*?Monstercat[\w,\s]*?)|Official(?: Music)*?(?: Video)*?(?: Track)*?|(?:Music Video)*?|OUT NOW|NEW|HD|HQ|DNB|Trap|Breaks|Dubstep|720p|1080p|Drumstep|Hardcore|House|Electro|Electronic|Hard Dance|Glitch[ ]*?Hop|Trance|Indie Dance|Nu Disco|Future Bass)[\]\)]( - )*/gi"
        },
        XtrackRegex: {
            title: "trackRegex RegEx (multiline converted to string). Check on https://regex101.com/#javascript",
            type: "string", 
            indent: 1,
            conditions: [ { field: 'XAdvancedSettings', value: 1 } ],
            placeholder: "/^(.*?)[ ]?(?:[-,] (.*?)$|(?: ['\"])(.*?)['\"]$)/i"
        },
        XimplicitArtist: {
            title: "implicitArtist RegEx (multiline converted to string). Check on https://regex101.com/#javascript",
            type: "string", 
            indent: 1,
            conditions: [ { field: 'XAdvancedSettings', value: 1 } ],
            placeholder: "/^([\w ]*\w)([ ]?[-,]?[ ]?)?(?:(').*?(')|.*?)$/gi"
        }
    }
}, 

function(sinusbot, config) {
    var defaultTitleFormat = "[cspacer0]♫ %trackInfo ♫";
    var defaultArtistFormat = "[cspacer0]🎧 %trackInfo 🎧";
    var defaultNothingPlaying = "[cspacer0]♫ Playing nothing :( ♫";
    //var channelDesc = "";
    //var channelFormatOld = "";

    function log(text) {
        var XLog = (typeof config.XLog != 'undefined' && config.XLog == 1);
        if (XLog) sinusbot.log(text);
    }

    if (typeof config.XDelData == 'undefined') {
        config.XDelData = 0;
        log('Stored data NOT cleaned. XDelData='+config.XDelData);
        log(' chFormat='+sinusbot.getVar('chFormat') );
        log(' chDesc='+sinusbot.getVar('chDesc') );
    } else {
        if (config.XDelData == 1) {
            /*sinusbot.setVar('chDesc', '');
            sinusbot.setVar('chFormat', '');
            unset('chDesc');
            unset('chFormat');*/
            sinusbot.unsetVar('chDesc');
            sinusbot.unsetVar('chFormat');
            config.XDelData = 0;
            log('Stored data cleaned. XDelData='+config.XDelData);
            log(' chFormat='+sinusbot.getVar('chFormat') );
            log(' chDesc='+sinusbot.getVar('chDesc') );
        }
    }

    if ('undefined' !== typeof config.NothingPlayingName) {
        config.NothingPlayingName = String(config.NothingPlayingName);
        if (!config.NothingPlayingName.length > 0) {
            config.NothingPlayingName = String(defaultNothingPlaying);
        }
    } else {
        config.NothingPlayingName = String(defaultNothingPlaying);
    }

    if ('undefined' !== typeof config.TitleChannelFormat) {
        config.TitleChannelFormat = String(config.TitleChannelFormat);
        if (!config.TitleChannelFormat.length > 0) {
            config.TitleChannelFormat = String(defaultTitleFormat);
        }
    } else {
        config.TitleChannelFormat = String(defaultTitleFormat);
    }

    if ('undefined' !== typeof config.ArtistChannelFormat) {
        config.ArtistChannelFormat = String(config.ArtistChannelFormat);
        if (!config.ArtistChannelFormat.length > 0) {
            config.ArtistChannelFormat = String(defaultArtistFormat);
        }
    } else {
        config.ArtistChannelFormat = String(defaultArtistFormat);
    }

    // Currently scrubs up Monstercat, VEVO, Official Video and Lyric debris scattered around the title.
    var bleacherS = "/(?:[\[|(]{0,1}?Official(?: Music){0,1}(?: Audio){0,1}(?: Video){0,1}(?: HD){0,1}(?: Track)*[\]\)]{0,1})|(?:[\w]*?VEVO)|(?:Radioshow:)|[\[\(]*?(?:(?:w*?\/[ ]*?)|with )Lyrics[\]\)]*?|(?:\[LIVE\] )|(?: \(join the chat\)$)|[\[\(](?:with[ ]*?|w\/[ ]*?)*?Lyrics[\],\)]|(?: \[Repeat\]$)|(?:[ ]*?-[ ]*?)*?[\[,\(]{1}(?:(?:[\w,\s]*?Monstercat[\w,\s]*?)|Official(?: Music)*?(?: Video)*?(?: Track)*?|(?:Music Video)*?|OUT NOW|NEW|HD|HQ|DNB|Trap|Breaks|Dubstep|720p|1080p|Drumstep|Hardcore|House|Electro|Electronic|Hard Dance|Glitch[ ]*?Hop|Trance|Indie Dance|Nu Disco|Future Bass)[\]\)]( - )*/gi";
    if ('undefined' !== typeof config.Xbleacher && config.Xbleacher != '') {
        var s = config.Xbleacher;
        s = s.replace(/[^\x20-\x7E]/gmi, "");
        if (bleacherS != '') {
            log("Bleacher = "+s);
            bleacherS = s;
        }
    }
    var bleacher = new RegExp(bleacherS);

    if ('undefined' !== typeof config.XimplicitArtist && config.XimplicitArtist != '') 
        var implicitArtist = new RegExp(config.XimplicitArtist);
    else
        var implicitArtist = new RegExp("/^([\w ]*\w)([ ]?[-,]?[ ]?)?(?:(').*?(')|.*?)$/gi");


    function DurationToTime(duration) {
        var dh = Math.floor(duration / 3600000);
        var dm = Math.floor(duration / 60000) - dh * 60;
        var ds = Math.floor(duration / 1000) - dm * 60 - dh * 3600;
        dh = (dh == 0) ? '' : dh + ':';
        dm = (dm < 10) ? '0' + dm + ':' : dm + ':';
        ds = (ds < 10) ? '0' + ds : ds;
        return dh + dm + ds;
    } /* DurationToTime */

    function CleanTag(tag, scrubber) {
        tag = String(tag);
        if ('undefined' == typeof tag || tag == null) {
            tag = "Unknown";
        }

        if ('undefined' == typeof scrubber || tag == null) {
            log('TagCleaner. Undefined scrubber. return tag='+tag);
            return tag;
        }

        log('TagCleaner. tag='+tag+'\ntagS='+tag.replace(scrubber, "")+'\nout='+tag.replace(/(^\s+|\s+$)|(\s\s+)/g, "") );

        tag = tag.replace(scrubber, "");
        return tag.replace(/(^\s+|\s+$)|(\s\s+)/g, "");
    } /* function CleanTag */

    function ComposeSpacerName(trackInfo, channelFormat, defaultChannelFormat) {
        log("Found " + trackInfo);
        if ('undefined' !== typeof trackInfo) {
            trackInfo = String(trackInfo);
            if (!trackInfo.length > 0) {
                trackInfo = "Unknown";
            }
        } else {
            trackInfo = "Unknown";
        }

        var original = String(channelFormat);
        var fullTitle = original.replace(/%trackInfo/gi, trackInfo);

        if (fullTitle.length > 40) {
            var minLength = original.replace(/%trackInfo/gi, "").length;
            var availableLength = 40 - minLength;

            trackInfo = trackInfo.substring(0, Math.min(availableLength - 1, trackInfo.length));
            fullTitle = original.replace(/%trackInfo/gi, trackInfo + "…");

            log("Was too long, now truncated to: " + original);
            return fullTitle;
        }

        if (!original.length > 0) {
            original = String(defaultChannelFormat);
            original.replace(/%trackInfo/gi, "Unknown");
        }

        return fullTitle;
    } /* function ComposeSpacerName */

    function TrackProcced(ev) {
        if ('undefined' !== typeof config.TitleChannelCh) {
            sinusbot.channelUpdate(config.TitleChannelCh, {
                "name": "[cspacer0]"
            });
        }
        if ('undefined' !== typeof config.ArtistChannelCh) {
            sinusbot.channelUpdate(config.ArtistChannelCh, {
                "name": "[cspacer0]"
            });
        }

        log("Received new track event for " + ev.title + " by " + ev.artist);
        var rawTitle = "Unknown";
        var rawArtist = "Unknown";
        var title = "";
        var artist = "";
        var album = "";

        if ('undefined' !== typeof ev.tempTitle) {
            title = ev.tempTitle;
            artist = ev.tempArtist;

            title = ComposeSpacerName(ev.tempTitle, config.TitleChannelFormat, defaultTitleFormat);
            artist = ComposeSpacerName(ev.tempArtist, config.ArtistChannelFormat, defaultArtistFormat);

            rawArtist = ev.tempArtist;
            rawTitle = ev.tempTitle;
        } else {
            // Cleanup so we can test for the "artist - title" format.
            title = CleanTag(ev.title, bleacher);
            artist = CleanTag(ev.artist, bleacher);
            album = CleanTag(ev.album, bleacher);

            if ('undefined' !== typeof title) {
                rawArtist = String(artist);
                rawTitle = String(title);

        if ('undefined' !== typeof config.XtrackRegex && config.XtrackRegex != '') 
            var trackRegex = new RegExp(config.XtrackRegex);
        else
            //var trackRegex = new RegExp("/^(.*?)[ ]?(?:[-,] (.*?)$|(?: ['"])(.*?)['"]$)/i");
            var trackRegex = new RegExp("/^(.*?)[ ]?(?:[-,] (.*?)$|(?: ['\"])(.*?)['\"]$)/i");
            var nestedArtistMatch = title.match(trackRegex);
                if (nestedArtistMatch != null) {
                    // Nested artist format detected!
                    if ('undefined' !== nestedArtistMatch[2] && nestedArtistMatch[2].length > 0) {
                        title = nestedArtistMatch[2];
                        rawTitle = nestedArtistMatch[2];
                    }
                    else if ('undefined' !== nestedArtistMatch[3] && nestedArtistMatch[3].length > 0) {
                        title = nestedArtistMatch[3];
                        rawTitle = nestedArtistMatch[3];
                    }

                    if ('undefined' !== nestedArtistMatch[1] && nestedArtistMatch[1].length > 0) {
                        artist = nestedArtistMatch[1];
                        rawArtist = nestedArtistMatch[1];
                    }
                }
            }

            title = ComposeSpacerName(title, config.TitleChannelFormat, defaultTitleFormat);
            if ('undefined' !== typeof artist && artist.length > 0 && artist != 'undefined') {
                artist = ComposeSpacerName(artist, config.ArtistChannelFormat, defaultArtistFormat);
            } else {
                if ('undefined' !== typeof album) {
                    artist = ComposeSpacerName(album, config.ArtistChannelFormat, defaultArtistFormat);
                    rawArtist = album;
                } else {
                    artist = ComposeSpacerName("Unknown", config.ArtistChannelFormat, defaultArtistFormat);
                    rawArtist = "Unknown";
                }
            }
        }

        if ('undefined' !== typeof config.TitleChannelCh) {
            sinusbot.channelUpdate(config.TitleChannelCh, {
                "name": title
            });
        }
        if ('undefined' !== typeof config.ArtistChannelCh) {
            sinusbot.channelUpdate(config.ArtistChannelCh, {
                "name": artist
            });
        }

        /* change nickname and nick description */
        if ('undefined' !== typeof config.changeNick && config.changeNick == 0) {
            var separator = (config.changeNickSeparator) ? config.changeNickSeparator : "—";
            var format = (config.changeNickFormat) ? config.changeNickFormat : "%a%s%t";
            var nickTitle = rawTitle;
            var nickArtist = rawArtist;
            var nickAlbum = (ev.album) ? ev.album : '';
            var maxLength = 30 - separator.length;
            var setBotDesc = (typeof config.changeNickDesc != 'undefined' && config.changeNickDesc == 0) ? true : false;

            if (typeof config.changeNickBleacherDesc != 'undefined' && config.changeNickBleacherDesc == 0) {
            log('Apply Bleacher for Nick Description. ');
                var tmpTitle = CleanTag(nickTitle, bleacher);
                var tmpArtist = CleanTag(nickArtist, bleacher);
                var tmpAlbum = CleanTag(nickAlbum, bleacher);
                var BotDesc = format.replace(/%a/ig, tmpArtist).replace(/%t/ig, tmpTitle).replace(/%al/ig, tmpAlbum).replace(/%s/ig, separator);
            } else
                var BotDesc = format.replace(/%a/ig, nickArtist).replace(/%t/ig, nickTitle).replace(/%al/ig, nickAlbum).replace(/%s/ig, separator);

            if (typeof config.changeNickBleacherNick != 'undefined' && config.changeNickBleacherNick == 0) {
                log('Apply Bleacher for NickName.');
                nickTitle = CleanTag(nickTitle, bleacher);
                nickArtist = CleanTag(nickArtist, bleacher);
                nickAlbum = CleanTag(nickAlbum, bleacher);
            }

            if (rawTitle.length + separator.length > maxLength) {
                // The title alone is too big for the nick, so use it and shorten.
                nickTitle = rawTitle.substring(0, Math.min(maxLength - 1, rawTitle.length)) + "…";

                separator = "";
                nickArtist = "";
            } else if (rawTitle.length + separator.length + rawArtist.length > maxLength) {
                if (rawTitle.length > rawArtist.length) {
                    nickTitle = rawTitle.substring(0, Math.min(maxLength - rawArtist.length - 1, rawTitle.length)) + "…";

                    if (rawArtist.length > (maxLength - nickTitle.length))
                        nickArtist = rawArtist.substring(0, maxLength - nickTitle.length - 1) + "…";
                } else 
            if (rawArtist.length >= rawTitle.length) {
                    nickArtist = rawArtist.substring(0, Math.min(maxLength - rawTitle.length - 1, rawArtist.length)) + "…";

                    if (rawTitle.length > (maxLength - nickArtist.length))
                        nickTitle = rawTitle.substring(0, maxLength - nickArtist.length - 1) + "…";
                }
            }

            //sinusbot.setNick(nickArtist + separator + nickTitle);
            format = format.replace(/%a/ig, nickArtist).replace(/%t/ig, nickTitle).replace(/%al/ig, nickAlbum)
                .replace(/%s/ig, separator);
            if (format.length > 30) format = format.substring(0, maxLength) + "…";
            sinusbot.setNick(format);
            if (setBotDesc) sinusbot.setDescription(BotDesc);
        } /* changeNick */

        /* change nickname and nick description */
        if (typeof config.channelHistory != 'undefined' && config.channelHistory == 0) {
            var separator = (config.channelHistorySeparator) ? config.channelHistorySeparator : "—";
            var format = (config.channelHistoryFormat) ? config.channelHistoryFormat : "%a %s %t%n";
            var nickTitle = rawTitle;
            var nickArtist = rawArtist;
            var nickAlbum = (ev.album) ? ev.album : '';
            var file = (ev.filename) ? ev.filename : '';
            var duration = ev.duration;
            duration = (duration) ? duration : sinusbot.getPos();
            duration = (duration > 0) ? DurationToTime(duration) : '00:00';
            var currentPlID = sinusbot.getCurrentPlaylistId();
            var currentPlName = (currentPlID != '') ? sinusbot.playlistGet(currentPlID).name : '';
            var now = Date.now();
            var nowDT = new Date(now).toLocaleString();
            var nowTime = new Date(now).toLocaleTimeString();
            var nowDate = new Date(now).toLocaleDateString();
            var setTopic = (typeof config.channelHistoryTopic != 'undefined' && config.channelHistoryTopic == 0) ? true : false;
            var setCurrCh = (typeof config.channelHistoryCurrCh != 'undefined' && config.channelHistoryCurrCh == 0) ? true : false;
            //var setCurChID = (setCurrCh) ? sinusbot.getCurrentChannelId();
            var setHistCh = (typeof config.channelHistorySelCh != 'undefined' && config.channelHistorySelCh != 0 && !setCurrCh) ? config.channelHistorySelCh : sinusbot.getCurrentChannelId();

            var chDesc = sinusbot.getVar('chDesc');
            var chFormat = sinusbot.getVar('chFormat');
            if (typeof chDesc == 'undefined') chDesc = '';
            if (typeof chFormat == 'undefined') chFormat = '';

            /*toLog = (track) ? JSON.stringify(track) : "no track!"
            log(toLog + 'dur='+duration);*/

            /*sinusbot.chatPrivate(5, 'ev = [noparse]'+JSON.stringify(ev)+'[/noparse]\n\n');
            sinusbot.chatPrivate(5, 'track = [noparse]'+JSON.stringify(track)+'\n'+sinusbot.getPos()+'[/noparse]\n\n');*/
            //sinusbot.chatPrivate(5, 'get = [noparse]'+chFormat+' | '+chDesc+'[/noparse]');

            if (typeof config.channelHistoryBleacherTopic != 'undefined' && config.channelHistoryBleacherTopic == 0) {
            log('Apply Bleacher for Channel Topic.');
                var tmpTitle = CleanTag(nickTitle, bleacher);
                var tmpArtist = CleanTag(nickArtist, bleacher);
                var tmpAlbum = CleanTag(nickAlbum, bleacher);
                var chTopic = format.replace(/%a/ig, tmpArtist).replace(/%t/ig, tmpTitle).replace(/%al/ig, tmpAlbum);
            } else
                var chTopic = format.replace(/%a/ig, nickArtist).replace(/%t/ig, nickTitle).replace(/%al/ig, nickAlbum);
                chTopic = chTopic.replace(/%f/ig, file).replace(/%s/ig, separator).replace(/%du/ig, duration)
                    .replace(/%plid/ig, currentPlID).replace(/%plname/ig, currentPlName)
                    .replace(/%now/ig, nowDT).replace(/%date/ig, nowDate).replace(/%time/ig, nowTime)
                    .replace(/%n/ig, "\n");

            if (typeof config.channelHistoryBleacherDesc != 'undefined' && config.channelHistoryBleacherDesc == 0) {
                log('Apply Bleacher for Channel Description.');
                nickTitle = CleanTag(nickTitle, bleacher);
                nickArtist = CleanTag(nickArtist, bleacher);
                nickAlbum = CleanTag(nickAlbum, bleacher);
            }

            //var desc = sinusbot.getChannel(config.channelHistorySelCh);
            //var desc = sinusbot.getChannel(config.channelHistorySelCh).parse(description);

            if (chFormat != nickTitle+nickArtist && (nickTitle != '' && nickArtist != '')) {
                chDesc = chTopic + chDesc;
                chFormat = nickTitle+nickArtist;
                sinusbot.setVar('chDesc', chDesc.substring(0,6800)); /* Max value for channel description text on SQLiteDB ~6800! */
                sinusbot.setVar('chFormat', chFormat);
            }

            if (setTopic) 
                sinusbot.channelUpdate(setHistCh, { description: chDesc, topic: chTopic })
            else 
                sinusbot.channelUpdate(setHistCh, { description: chDesc })
        } /* channelHistory */

        var fullyCleaned = rawTitle + ", by " + rawArtist;

        // Announce over TTS if desired
        if (config.ttsAnnounce == 0) {
            // Clean up names for TTS.
            var ttsFriendly = new RegExp(/[^\w\s]/gi);
            if (config.cleanTTS == 0)
                sinusbot.say(fullyCleaned.replace(ttsFriendly, "").replace(/ft[.]*?/gi, 'feat'));
            else
                sinusbot.say(fullyCleaned);
        }

        if (config.channelAnnounce == 0) {
            sinusbot.chatChannel(fullyCleaned);
        }
    } /* function TrackProcced */

    sinusbot.on('stop', function(ev) {
        if ('undefined' !== typeof config.TitleChannelCh) {
            sinusbot.channelUpdate(config.TitleChannelCh, {
                "name": config.NothingPlayingName
            });
        }

        if ('undefined' !== typeof config.ArtistChannelCh) {
            sinusbot.channelUpdate(config.ArtistChannelCh, {
                "name": ComposeSpacerName("-", defaultArtistFormat, defaultArtistFormat)
            });
        }

        if ('undefined' !== typeof config.changeNick) {
            sinusbot.setNick(config.NothingPlayingName);
        }
    }); /* event stop */

    sinusbot.on('trackEnd', function(ev) {
        if ('undefined' !== typeof config.TitleChannelCh) {
            sinusbot.channelUpdate(config.TitleChannelCh, {
                "name": config.NothingPlayingName
            });
        }

        if ('undefined' !== typeof config.ArtistChannelCh) {
            sinusbot.channelUpdate(config.ArtistChannelCh, {
                "name": ComposeSpacerName("-", defaultArtistFormat, defaultArtistFormat)
            });
        }

        /*if ('undefined' !== typeof config.changeNick) {
            sinusbot.setNick(config.NothingPlayingName);
        }*/
    }); /* event trackEnd */

    sinusbot.on('trackInfo', function(ev) {
        TrackProcced(ev)
    }); /* event trackInfo */
    
    sinusbot.on('track', function(ev) {
        TrackProcced(ev)
    }); /* event track (radio) */

    sinusbot.on('chat', function(ev) {
    switch (ev.msg) {
        /*case '.info':
            sinusbot.chatPrivate(ev.clientId, 'event on channel.id=[b]'+ev.channel+'[/b]\n\n');
            var desc = sinusbot.getChannel(config.channelHistory);
            sinusbot.chatPrivate(ev.clientId, '[noparse]'+JSON.stringify(desc)+'[/noparse]\n\n');

            //var desc0 = "";
            //var desc0 = desc.parse(description);
            //sinusbot.chatPrivate(ev.clientId, desc0);

            var track = sinusbot.getCurrentTrack();
            if (track) {
                sinusbot.chatPrivate(ev.clientId, 'track0 = [noparse]'+JSON.stringify(track)+'[/noparse]\n\n');
            } else {
                var track = sinusbot.getTrack();
                if (!track) sinusbot.chatPrivate(ev.clientId, 'track1 = [noparse]'+JSON.stringify(track)+'[/noparse]\n\n');
            };
        break;*/

        case '.NowGetVars':
            var chFormat = sinusbot.getVar('chFormat');
            var chDesc = sinusbot.getVar('chDesc');
            log( '.NowGetVars: chFormat: ' + chFormat + '\nchDesc: ' + chDesc );
            sinusbot.chatPrivate(ev.clientId, '.NowGetVars: [b][color=blue]chFormat[/color][/b]: [noparse]' + chFormat + '[/noparse]' );
            if (chDesc.length > 900) {
                var s = "";
                var i = 0;
                sinusbot.chatPrivate(ev.clientId, '[b][color=blue]chDesc[/color][/b]: [b][color=red]value very long ('+chDesc.length+')! Out every 900 chars substring[/color][/b]');
                do {
                s = (i == 0 ) ? '' : '…';
                s += '[noparse]' + chDesc.substring(i,i+900) + '[/noparse]';
                sinusbot.chatPrivate(ev.clientId, s );
                i += 900;
                } while (i <= chDesc.length);
            } else 
                sinusbot.chatPrivate(ev.clientId, '[b]chDesc[/b]: [noparse]' + chDesc + '[/noparse]' );
        break;

        case '.NowGetVarF':
            var chFormat = sinusbot.getVar('chFormat');
            log( '.NowGetVars: chFormat: ' + chFormat );
            sinusbot.chatPrivate(ev.clientId, '.NowGetVars: [b][color=blue]chFormat[/color][/b]: [noparse]' + chFormat + '[/noparse]' );
        break;

        case '.TrackProcced':
            //log( 'NowGetVars: chFormat: ' + chFormat );
            //sinusbot.chatPrivate(ev.clientId, 'NowGetVars: [b][color=blue]chFormat[/color][/b]: [noparse]' + chFormat + '[/noparse]' );
            sinusbot.chatPrivate(ev.clientId, '.TrackProcced: /* ToDo */' );
            TrackProcced(sinusbot.getTrack());
        break;
    }
    });
});
