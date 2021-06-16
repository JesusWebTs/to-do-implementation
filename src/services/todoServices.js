export class TodoConnection {
  uri;
  constructor(uri) {
    this.uri = uri;
  }

  async getFolders() {
    return fetch(`${this.uri}/api/todo/base`)
      .then((res) => {
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json();
      })
      .then((res) => {
        const { payload } = res;
        return payload;
      });
  }
  async getFolder(id) {
    return fetch(`${this.uri}/api/todo/base/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json();
      })
      .then((res) => {
        console.log(res);
        const { payload } = res;
        return payload;
      });
  }
  async deleteFolder(id) {
    return fetch(`${this.uri}/api/todo/base/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    });
  }
  async updateFolder(id, body) {
    return fetch(`${this.uri}/api/todo/base/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    });
  }
  async createFolder(body) {
    console.log(body);
    return fetch(`${this.uri}/api/todo/base`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    });
  }
}
