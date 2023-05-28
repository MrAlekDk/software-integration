import Router from 'express';
const router = Router();

const spacecrafts = [{
    id: 1,
    name: 'Apollo 11'
},
{
    id: 2,
    name: 'Apollo 12'
}
]

/**
 * @openapi
 * /api/spacecrafts:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 *         content:
 *          application/json
 */
router.get('/api/spacecrafts', (req, res) => {
    res.json(
        {data: spacecrafts}
    );
});

/**
 * @openapi
 * /api/spacecrafts/{spacecraftId}:    
 *   get:
 *     description: get a spacecraft by id
 *     responses:
 *       200:
 *         description: Returns a spacecraft by id
 *         content:
 *          application/json
 */
router.get('/api/spacecrafts/:id', (req, res) => {
    const id = req.params.id;
    const spacecraft = spacecrafts.find((spacecraft) => spacecraft.id === parseInt(id));
    res.json({data: spacecraft});
});

export default router;
