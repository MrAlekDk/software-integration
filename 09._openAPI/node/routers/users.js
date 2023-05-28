import Router from 'express';
const router = Router();

const users = [{
    id: 1,
    name: 'John Doe'
},
{
    id: 2,
    name: 'Jane Doe'
}
]


/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 *         content:
 *          application/json
 */
router.get('/api/users', (req, res) => {
    res.json(
        {data: users}
    );
});

/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Creates a user
 *     parameters:
 *      in: body
 *      name: user
 * 
 *     responses:
 *       201:
 *         description: Creates and returns the new user
 *         content:
 *          application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 */
router.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({data: user});
});

export default router;