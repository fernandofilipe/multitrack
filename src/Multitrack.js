const settings = require("../settings");
const csv = require("./CsvServices");
const dropbox = require("./DropboxServices");
const Music = require("./Music");

class Multitrack {
  constructor() {}

  async run() {
    console.log(settings.general.message.start);
    const musics = await dropbox.musics();
    const fileName = settings.file.name;
    const filePath = settings.file.path;

    csv.clear(filePath, fileName);
    musics.map((musicItem) => {
      const music = new Music(musicItem);
      csv.save(filePath, fileName, music.parse());
    });

    console.log(settings.general.message.finish);
  }
}

module.exports = new Multitrack();
