import LocalAppTemplateModel from '../TemplateModel';
import extendedPropmts, { Answers } from './extended-prompts';
import TemplateModel from './TemplateModel';
import getQuestions from './getQuestions';
import { getInstance } from './auth';
import { initAppService } from './appService';
import defaultAnswers from './defaultAnswers';

export default async (
  localAppModel: LocalAppTemplateModel,
): Promise<TemplateModel> => {
  const instance = await getInstance();
  if (instance) {
    initAppService(instance);
  } else {
    // We should handle default template
    return new TemplateModel(defaultAnswers as any);
  }
  const questions = getQuestions();
  let answers: Answers<string>;

  try {
    answers = await extendedPropmts<{ apps?: any } & LocalAppTemplateModel>(
      questions,
      localAppModel,
    );
  } catch (e) {
    // We want to show unhanded errors
    if (e.message !== 'Aborted') {
      console.error(e);
    }
    console.log();
    console.log('Aborting ...');
    process.exit(0);
  }

  return new TemplateModel(answers as any);
};
