const settings = require("../settings");

class Music {
  constructor(music) {
    this.music = music;
  }

  parse() {
    function extractYearMonth(path) {
      const tokens = path.split(settings.general.folder.delimiter);
      return { year: tokens[1], month: tokens[2] };
    }

    function extractSingerAndMusicName(music) {
      const tokens = music.name.split(" - ");
      return { singer: tokens[0], name: tokens[1] };
    }

    const yearMonth = extractYearMonth(this.music.path_lower);
    const music = extractSingerAndMusicName(this.music);
    return `${music.singer}; ${music.name}; ${yearMonth.year}; ${yearMonth.month}\n`;
  }
}

module.exports = Music;
