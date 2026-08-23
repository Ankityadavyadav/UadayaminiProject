import {test, expect} from '@playwright/test';

test("Get a single post returns the right data",async ({request}) => {

    //send a request 
    const response = await request.get("https://jsonplaceholder.typicode.com/posts");
    // check status code
    expect(response.status()).toBe(200);
    //turn the responce into a usable object
    const body = await response.json();
    //check what inside
    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");

    expect(response.statusText()).toBe("OK"); //2xx
});

test('POST create a new post',async ({request}) => {

    const response = await request.post("https://jsonplaceholder.typicode.com/posts",{
        data: {
            title: "my first post",
            body: "this is the body of my first post",
            userId: 1,
        },
    });

    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created).toHaveProperty("id");
    expect(created.title).toBe("my first post");
    expect(created.body).toBe("this is the body of my first post");
    expect(created.userId).toBe(1);

    // put 
await request.put('https://jsonplaceholder.typicode.com/posts/1', {
  data: { id: 1, title: 'Replaced', body: 'All new', userId: 1 },
});

// patch
await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
  data: { title: 'Updated' },
});

// delete 
await request.delete('https://jsonplaceholder.typicode.com/posts/1');
expect(response.status()).toBe(200);
});

// id 101




