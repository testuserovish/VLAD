module.exports = {
	DISCORD_DOMAIN: 'discord.com',
	API_VERSION: 9,
	GATEWAY: 'wss://gateway.discord.gg?encoding=json&v=9',
	COMMAND_OPTION_TYPES: {
		SUB_COMMAND: 1,
		SUB_COMMAND_GROUP: 2,
		STRING: 3,
		INTEGER: 4,
		BOOLEAN: 5,
		USER: 6,
		CHANNEL: 7,
		ROLE: 8,
		MENTIONABLE: 9,
		NUMBER: 10
	},
	COMPONENT_TYPES: {
	    ACTION_ROW: 1,
	    BUTTON: 2,
	    SELECT_MENU: 3
	},
	BUTTON_STYLES: {
	    PRIMARY: 1,
	    SECONDARY: 2,
	    SUCCESS: 3,
	    DANGER: 4,
	    LINK: 5
	},
	INTENTS: {
		GUILDS: 1 << 0,
		GUILD_MEMBERS: 1 << 1,
		GUILD_BANS: 1 << 2,
		GUILD_EMOJIS_AND_STICKERS: 1 << 3,
		GUILD_INTEGRATIONS: 1 << 4,
		GUILD_WEBHOOKS: 1 << 5,
		GUILD_INVITES: 1 << 6,
		GUILD_VOICE_STATES: 1 << 7,
		GUILD_PRESENCES: 1 << 8,
		GUILD_MESSAGES: 1 << 9,
		GUILD_MESSAGE_REACTIONS: 1 << 10,
		GUILD_MESSAGE_TYPING: 1 << 11,
		DIRECT_MESSAGES: 1 << 12,
		DIRECT_MESSAGE_REACTIONS: 1 << 13,
		DIRECT_MESSAGE_TYPING: 1 << 14
	},
	PERMISSIONS: {
		createInstantInvite: 1n << 0n,
		kickMembers: 1n << 1n,
		banMembers: 1n << 2n,
		administrator: 1n << 3n,
		manageChannels: 1n << 4n,
		manageGuild: 1n << 5n,
		addReactions: 1n << 6n,
		viewAuditLog: 1n << 7n,
		voicePrioritySpeaker: 1n << 8n,
		voiceStream: 1n << 9n,
		viewChannel: 1n << 10n,
		sendMessages: 1n << 11n,
		sendTTSMessages: 1n << 12n,
		manageMessages: 1n << 13n,
		embedLinks: 1n << 14n,
		attachFiles: 1n << 15n,
		readMessageHistory: 1n << 16n,
		mentionEveryone: 1n << 17n,
		useExternalEmojis: 1n << 18n,
		viewGuildInsights: 1n << 19n,
		voiceConnect: 1n << 20n,
		voiceSpeak: 1n << 21n,
		voiceMuteMembers: 1n << 22n,
		voiceDeafenMembers: 1n << 23n,
		voiceMoveMembers: 1n << 24n,
		voiceUseVAD: 1n << 25n,
		changeNickname: 1n << 26n,
		manageNicknames: 1n << 27n,
		manageRoles: 1n << 28n,
		manageWebhooks: 1n << 29n,
		manageEmojisAndStickers: 1n << 30n,
		useApplicationCommands: 1n << 31n,
		voiceRequestToSpeak: 1n << 32n,
		manageEvents: 1n << 33n,
		manageThreads: 1n << 34n,
		createPublicThreads: 1n << 35n,
		createPrivateThreads: 1n << 36n,
		useExternalStickers: 1n << 37n,
		sendMessagesInThreads: 1n << 38n,
		startEmbeddedActivities: 1n << 39n
	}
}