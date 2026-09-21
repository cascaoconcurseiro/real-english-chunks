import { asc, eq } from "drizzle-orm";
import { requireChatGPTUser } from "./chatgpt-auth";
import { getDb } from "../db";
import { reviewState } from "../db/schema";
import { chunks } from "./content";
import LearningApp from "./learning-app";
export const dynamic="force-dynamic";
export default async function Home(){const user=await requireChatGPTUser("/");const states=await getDb().select().from(reviewState).where(eq(reviewState.userId,user.userId)).orderBy(asc(reviewState.dueAt));return <LearningApp user={{name:user.displayName,email:user.email}} chunks={chunks} initialStates={states.map(s=>({...s,dueAt:s.dueAt.getTime(),updatedAt:s.updatedAt.getTime()}))} signOut="#"/>;}
