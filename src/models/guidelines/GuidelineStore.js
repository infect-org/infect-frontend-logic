import debug from 'debug';
import { observable, action } from 'mobx';
import Store from '../../helpers/store';

const log = debug('infect:GuidelineStore');

/**
 * Holds all guidelines for a tenant (e.g. «Schweiz. Ges. für Infektiologie»)
 */
export default class GuidelineStore extends Store {

    @observable selectedGuideline;

    @action add(guideline, ...params) {
        log('Add guideline %o', guideline);
        super.add(guideline, ...params);
        if (!this.selectedGuideline) this.selectedGuideline = guideline;
    }

}
