"use client";

import React, { useEffect, useState } from 'react';

export default async function GetToken() {

    async function getToken() {
        fetch('/api/auth/token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div>
            <h1>Get Token</h1>
            <p>Check the console for the token</p>
        </div>
    );
}