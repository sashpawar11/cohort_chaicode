import express from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();


const registerUser = async (req, res) => {

    await prisma.user.findUnique({
     where : {email}
    })



const loginUser = async (req, res) => {

}


const healthCheck = async (req, res) => {
    return res.status(200).json({
                healthcheckStatus : "Up and running"
    })
}

export { loginUser , registerUser, healthCheck};