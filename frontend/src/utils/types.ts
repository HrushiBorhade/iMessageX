//user
export interface CreateUsernameData {
  createUsername: {
    success: boolean;
    error: string;
  };
}
export interface CreateUsernameVariables {
  username: string;
}
export interface SearchUsersInput {
  username: string;
}

export interface SearchUsersData {
  searchUsers: Array<SearchedUser>;
}

export interface SearchedUser {
  id: string;
  username: string;
}

//conversation

export interface CreateConversationData {
  createConversation: {
    conversationId: string;
  };
}
export interface CreateConversationInput {
  participantIds: Array<string>;
}
