var generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: new Date().getTime()
	};
};

var generateLocationMessage = (from, latitude, longitutde) => {
	return {
		from,
		url: `https://www.google.com/maps?q=${latitude},${longitutde}`,
		createdAt: new Date().getTime()
	};
};

module.exports = {generateMessage, generateLocationMessage};