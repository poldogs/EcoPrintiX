import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const POST = async (req, res) => {
    const { taskId } = req.body;
    
    // Get the current session
    const session = await getAuthSession(req);
    const userId = session.user.id;

    try {
        const userTask = await prisma.userTask.findUnique({
            where: {
                
                    userId: userId,
                    taskId: taskId,
            
            },
        });
    
        if (!userTask) {
            return res.status(404).json({ error: 'User task not found' });
        }
    
        try {
                const updatedUserTask = await prisma.userTask.update({
                    where: {
                        
                            userId: userId,
                            taskId: taskId,
                        
                    },
                    data: {
                        completed: true,
                    },
                });
            
                // Check if the update was successful
                if (!updatedUserTask) {
                    return res.status(500).json({ error: 'Failed to update user task' });
                }
            
                res.status(200).json(updatedUserTask);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while completing the task' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while finding the user task' });
        }
}