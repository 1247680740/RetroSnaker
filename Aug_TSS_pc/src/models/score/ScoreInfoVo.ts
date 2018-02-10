namespace models.score
{
	/** 游戏得分数据模型 */
	export class ScoreInfoVO
	{
		/** ID编号 */
		id: number;

		/** 名称 */
		name: string;

		/** 体重 */
		weight:number;

        /** 头像 */
        icon:string;

		/** 数值 */
		numVlue:number
		constructor()
		{

		}
	}
}