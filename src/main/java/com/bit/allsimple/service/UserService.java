package com.bit.allsimple.service;

import com.bit.allsimple.dto.UserDTO;

public interface UserService {
    UserDTO join(UserDTO userDTO);

    UserDTO login(UserDTO userDTO);

    long idCheck(UserDTO userDTO);
}
