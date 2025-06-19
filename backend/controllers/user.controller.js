import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken'

const loginUser = asyncHandler(async(req, res)=>{
    // req body-> data
    // username and password
    // validate it and find the user
    // password check
    // generate access and refresh token 
    // send them in secure cookies

    const {username, password} = req.body
    console.log(`username: ${username}, password: ${password}`)

    if(!username){
        throw new ApiError(400, "Username is required")
    }

    const user = await User.findOne({username})

    if(!user){
        throw new ApiError(404, "User not found")
    }


})