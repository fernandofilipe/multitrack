require("isomorphic-fetch");
const settings = require("../settings");

class DropboxServices {
  constructor() {}

  async musics() {
    const Dropbox = require("dropbox").Dropbox;
    const dropboxService = new Dropbox({ accessToken: settings.token });

    return dropboxService
      .filesListFolder({
        path: settings.dropbox.path,
        recursive: true,
        limit: settings.dropbox.limit,
        include_media_info: true,
      })
      .then(function (response) {
        let items = response.result.entries;
        return response.result.entries ? items.filter((item) => item[".tag"] === "file") : [];
      })
      .catch(function (error) {
        console.log(error);
        return [];
      });
  }
}

module.exports = new DropboxServices();