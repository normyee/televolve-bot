import { Request, Response, Router } from "express";
import axios from "axios";

const router = Router();

// Rotas de métodos HTTP do Telegram.
router.get("/getMessages", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getUpdates`,
    );

    console.log("RESULTADOS: ", response.data.result);

    return res.status(200).json({ resultado: response.data });
  } catch (error) {
    console.error(error);

    return res.json({ message: "error" });
  }
});

export { router };
