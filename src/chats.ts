function getDateMinusHours(hours: number) {
  var d = new Date();
  d.setHours(d.getHours() - hours);
  return d;
}

interface User {
  name: string;
  profileImg: string;
  isOnline: boolean;
}

interface LastMessage {
  text: string;
  timeOfMessage: Date;
  receivedNotSent: boolean;
  isRead: boolean;
}

interface Chat {
  user: User;
  lastMessage: LastMessage;
  unread: number;
}

const users: User[] = [
  {
    name: "Quentin Tarantino",
    profileImg:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2Mzg0MTY3NDM1/quentin-tarantino-9502086-1-402.jpg",
    isOnline: false
  },
  {
    name: "Christopher Nolan",
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg",
    isOnline: true
  },
  {
    name: "Martin Scorsese",
    profileImg:
      "https://www.indiewire.com/wp-content/uploads/2014/01/martin-scorsese.jpg",
    isOnline: false
  },
  {
    name: "Steven Spielberg",
    profileImg:
      "https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    isOnline: true
  }
];

const chats = [
  {
    user: users[0],
    lastMessage: {
      text: "No worries, we're planning on filming most of it in one room.",
      timeOfMessage: getDateMinusHours(2),
      isRead: false,
      receivedNotSent: true
    },
    unread: 1
  },
  {
    user: users[1],
    lastMessage: {
      text: "How much would it cost if we blew the place up?",
      timeOfMessage: getDateMinusHours(5),
      isRead: false,
      receivedNotSent: true
    },
    unread: 2
  },
  {
    user: users[2],
    lastMessage: {
      text: "Unfortunately I cannot say if it's available for that long.",
      timeOfMessage: getDateMinusHours(9),
      isRead: true,
      receivedNotSent: false
    },
    unread: 0
  },
  {
    user: users[3],
    lastMessage: {
      text: "Yes it's still available.",
      timeOfMessage: getDateMinusHours(10),
      isRead: true,
      receivedNotSent: false
    },
    unread: 0
  }
];

export default chats;
