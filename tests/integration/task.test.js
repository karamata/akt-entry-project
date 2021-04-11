import mongoose from 'mongoose';
import request from 'supertest';

const { MongoMemoryServer } = require('mongodb-memory-server');

const startServer = require('../../src/backend/index');

const app = startServer();

describe('Task', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const URI = await mongoServer.getUri();

    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  });

  afterAll(async done => {
    mongoose.disconnect(done);
    await mongoServer.stop();
  });

  afterEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for (const collection of collections) {
      await collection.deleteMany();
    }
  });

  it('Create a task success', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Do homework',
      });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ title: 'Do homework' });
  });

  it('Create a task fail if empty title', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: '',
      });

    expect(response.body).toMatchObject({ message: 'Title required' });
  });

  it('Update a task success', async () => {
    const createResponse = await request(app)
      .post(`/api/tasks`)
      .send({
        title: 'Do homework',
      });

    const task = createResponse.body;

    const response = await request(app)
      .put(`/api/tasks/${task._id}`)
      .send({
        id: task._id,
        title: 'Learning english',
      });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ _id: task._id, title: 'Learning english' });
  });

  it('Update a task fail if empty task id in body', async () => {
    const createResponse = await request(app)
      .post(`/api/tasks`)
      .send({
        title: 'Do homework',
      });

    const task = createResponse.body;

    const response = await request(app)
      .put(`/api/tasks/${task._id}`)
      .send({
        title: 'Learning english',
      });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({ message: 'Bad request' });
  });

  it('Remove a task success', async () => {
    const createResponse = await request(app)
      .post(`/api/tasks`)
      .send({
        title: 'Do homework',
      });
    const task = createResponse.body;

    const response = await request(app).delete(`/api/tasks/${task._id}`);

    expect(response.status).toBe(200);
  });

  it('Remove a task failed if task it not exist', async () => {
    const response = await request(app).delete(`/api/tasks/6071a44590a1de538c5c837d`);
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({ message: 'Task is not exist' });
  });

  it('Should be able to list all projects', async () => {
    const response = await request(app).get('/api/tasks');

    expect(response.status).toBe(200);
  });
});
